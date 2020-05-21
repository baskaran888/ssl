const Route = require('../../../service/mainRoute/route');
const _ = require('lodash');
const jwt  = require('jsonwebtoken');

exports = module.exports = function(app, db) {

    return new Route({
        url: '/login',

        generateJwt: async (user) => {
            const requiredOptions = {
                algorithm: 'HS256',
                issuer: 'api'
            };

            const payload = {
                type: 'access',
                userId: _.get(user, 'id', 0)
            };

            const authentication_key = 'fkjdfkjdshfkjsdhfkjldskfdshfdhkjfhwehqihiew';

            user.accessToken = await jwt.sign(payload, authentication_key, requiredOptions);

            await db.user.update(user, {where: {id: user.id}});

            const result = await db.user.findOne({where: {id: user.id}});

            return result;
        },

        callback: async function(req, res) {

            try {

                const inputs = req.body;

                const user = await db.user.findOne({where: {email: inputs.email, password: inputs.password}});

                const data = await this.generateJwt(user);

                return res.status(200).json(data);

            } catch (ex) {
                return ex;
            }

        }
    });

};
