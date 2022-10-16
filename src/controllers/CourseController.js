const Course = require('../models/Course')
const { mongooseObject } = require('../util/mongoose')

class CourseController {
    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course)
                res.render('courses/show', { course: mongooseObject(course) })
            })
            .catch(error => next(error))
        // res.send(req.params.slug);
    }
}

module.exports = new CourseController();
