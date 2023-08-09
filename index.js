const express = require('express'),
    app = express(),
    bodyparser = require('body-parser');

const db = require('./db'),
    routes = require('./src/controller')

app.use(bodyparser.json())
app.use('/api', routes)

const port = process.env.PORT || 5000;

db.query("SELECT 1")
    .then(() => {
        console.log('db connection success.')
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch(err => console.log('db connection failed. \n' + err))

