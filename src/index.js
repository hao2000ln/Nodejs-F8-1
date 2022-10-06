const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars')
const app = express();
const port = 8082;

const route = require('./routers');

const { Router } = require('express');
//morgan -HTTP logger
app.use(morgan('combined'));

//scss
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded(
    { extended: true }
));
app.use(express.json());

//// Template engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//route init
route(app);
// Luồng thực hiện sẽ là : đi từ route truyền express  
//Gọi đến function route(app) 


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})