const Route = require('../../service/mainRoute/route');
const _ = require('lodash');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/todo/:id',


        callback: async function(req, res) {

            try {

                const taskId = req.params.id;

                const data = await db.todo.findOne({where: {id: taskId}});

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
