const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        title: { type: String, unique: true },
        image: { type: String },
    },
);

module.exports = mongoose.model('Category', Category);
