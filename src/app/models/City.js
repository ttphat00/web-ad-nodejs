const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const City = new Schema(
    {
        cityName: { type: String, unique: true },
    },
);

module.exports = mongoose.model('City', City);
