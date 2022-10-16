const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 8082;

const route = require('./routers');
const { Router } = require('express');

//connect database
const db = require('./config');
db.connect();

//morgan -HTTP logger
app.use(morgan('combined'));

//scss
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//// Template engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port : ${port}`);
});
