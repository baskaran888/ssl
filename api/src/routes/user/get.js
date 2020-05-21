const Route = require('../../service/mainRoute/route');
const _ = require('lodash');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/user/:id',


        callback: async function(req, res) {

            try {

                const userId = req.params.id;

                const data = await db.user.findOne({where: {id: userId}});

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
