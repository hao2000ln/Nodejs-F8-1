module.exports = {
    mutipleMongooseObject: function (mongooseArray) {
        return mongooseArray.map(mongooseArray => mongooseArray.toObject())
    },
    mongooseObject: function (mongoose) {
        return mongoose ? mongoose.toObject(): mongoose;
    },
}