const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars')
const app = express();
const port = 8082;

//morgan -HTTP logger
// app.use(morgan('combined'));


//scss
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded());
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



// GET method route 
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    console.log(req.query); //paramester
    res.render('search');
});
app.post('/search', (req, res) => {
    console.log(req.body);
    res.render('search');
});

// báo lỗi 
app.use((req, res, next) => {
    res.status(404).send('Không tìm thấy trang 404 not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})