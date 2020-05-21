const Route = require('../../service/mainRoute/route');
const _ = require('lodash');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/todo',


        callback: async function(req, res) {

            try {

                const inputs = req.body;

                const task = {
                    taskName: inputs.taskName,
                    expired: inputs.expired,
                    completionStatus: false,
                    createdBy: req.user.id,
                    createdAt: inputs.createdAt,
                    updatedAt: inputs.updatedAt
                };

                const data = await db.todo.create(task);

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
