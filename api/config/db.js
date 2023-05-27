const mongoose = require('mongoose');

exports.dBconnect = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log('connect to mongodb database')
        })
        .catch((err) => {
            throw err;
        });
};