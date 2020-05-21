const Route = require('../../service/mainRoute/route');
const _ = require('lodash');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/todo/:id',


        callback: async function(req, res) {

            try {

                const inputs = req.body;

                const taskId = req.params.id;

                const task = {
                    id: taskId,
                    taskName: inputs.taskName,
                    expired: inputs.expired,
                    completionStatus: inputs.completionStatus,
                    createdBy: inputs.createdBy,
                    createdAt: inputs.createdAt,
                    updatedAt: inputs.updatedAt
                };

                await db.todo.update(task, {where: {id: taskId}});

                const data = await db.todo.findOne({where: {id: taskId}});

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
