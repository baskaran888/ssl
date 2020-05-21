const Route = require('../../service/mainRoute/route');
const _ = require('lodash');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/todos',


        callback: async function(req, res) {

            try {

                const data = await db.todo.findAll();

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
