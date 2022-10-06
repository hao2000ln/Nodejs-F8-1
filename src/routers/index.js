// chuyển router từ file index sang 

const newsRouter = require('./news');
const siteRouter = require('./site');


function route(app) {
    // GET method route 

    // local host - hosting
    app.use('/news', newsRouter)

    app.use('/', siteRouter)


    // báo lỗi 
    app.use((req, res, next) => {
        res.status(404).send('Không tìm thấy trang 404 not found')
    })
}

module.exports = route;
