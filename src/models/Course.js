const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String},
    description: { type: String, maxLength: 255 },
    image: { type: String, match: /[a-z]/ },
    slug: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date }
});

module.exports = mongoose.model('Courses', Course);