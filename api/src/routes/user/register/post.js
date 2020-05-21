const Route = require('../../../service/mainRoute/route');
const _ = require('lodash');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/register',


        callback: async function(req, res) {

            try {

                const inputs = req.body;

                const user = {
                    firstName: inputs.firstName,
                    lastName: inputs.lastName,
                    email: inputs.email,
                    password: inputs.password,
                    accessToken: 'xxx'
                };

                const data = await db.user.create(user);

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
