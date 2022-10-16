const Course = require('../models/Course')
const { mutipleMongooseObject } = require('../util/mongoose')
class SiteController {
    //[GET]/
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if(!err){
        //         res.json(courses)
        //     } else{
        //         next(err);
        //         // res.status(400).json({error: 'LOi'})
        //     }
        // })

        Course.find({})
            // .then(courses => res.json(courses))
            .then(courses => {
                res.render('home', { courses: mutipleMongooseObject(courses) })
            })
            .catch(error => next(error))
    }
    // res.render('home');

    //[GET]/
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
