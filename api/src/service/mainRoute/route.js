const _ = require('lodash');
const bPromise = require('bluebird');
const formidable = require('formidable');
const os = require('os');

function Route(options) {

    this.callback = _.noop;

    _.extend(this, _.isObject(options) ? options : {});
}

Route.prototype.getPostedFormData = function(httpRequest) {
    return new bPromise(function(resolve, reject) {
        const form = new formidable.IncomingForm();

        if (!_.has(httpRequest.headers, 'content-type')) {
            return resolve({
                fields: [],
                files: []
            });
        } else if (httpRequest.headers['content-type'].indexOf('multipart') < 0) {
            return resolve({
                fields: httpRequest.body,
                files: []
            });
        }

        form.uploadDir = os.tmpdir();
        form.keepExtensions = true;
        form.type = 'multipart';
        form.hash = true;

        form.parse(httpRequest, function(err, fields, files) {
            if (err) {
                return reject(err);
            }

            resolve({
                fields: fields,
                files: files
            });
        });
    });
};

Route.prototype.requireAuthentication = function(httpRequest) {
    const user = _.get(httpRequest, 'user');

    if (!user || user.type !== 'access') {
        throw new Error('Unauthorized');
    }

    return bPromise.resolve(httpRequest);
};

exports = module.exports = Route;
