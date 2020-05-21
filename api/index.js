const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const route = require('./src/service/mainRoute/routes');

const cors = require('./src/service/cors');

const authentication = require('./src/service/authentication');

const db = require('./src/models');

const port = 3000;

async function appInit() {

    try {

        app.use(bodyParser.json());
        app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );

        db.sequelize.sync();

        app.all('*', cors);
        app.all('*', authentication(app, db));

        await route(app, db);

        app.listen(port, () => {
            console.log('Example app listening on port 3000!')
        });
    } catch (ex) {
        console.log(`Error connecting server ${ex}`);

    }
}

appInit();
