const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Admin = new Schema(
    {
        email: { type: String, unique: true },
        password: { type: String },
    },
    {
        timestamps: false,
    },
);

module.exports = mongoose.model('Admin', Admin);
