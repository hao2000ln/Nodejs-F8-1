// chuyển router từ file index sang

const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    // GET method route
    // local host - hosting
    app.get('/news', newsRouter);
    app.use('/courses', courseRouter);

    app.get('/', siteRouter);

    // báo lỗi
    app.get((req, res, next) => {
        res.status(404).send('Không tìm thấy trang 404 not found');
    });
}

module.exports = route;
