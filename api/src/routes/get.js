const Route = require('../service/mainRoute/route');
const _ = require('lodash');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/',


        callback: async function(req, res) {

            try {
                const data = {
                    status: 'ok',
                    authenticated: true
                };

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
