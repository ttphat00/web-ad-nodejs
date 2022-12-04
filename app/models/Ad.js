const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Image = new Schema({
    url: { type: String },
});

const Ad = new Schema(
    {
        title: { type: String },
        view: { type: Number, default: 0 },
        content: { type: String },
        createdAt: { type: Date },
        expireDate: { type: Date },
        duration: { type: Number },
        numberOfExtensionDays: { type: Number, default: 0 },
        price: { type: String },
        display: { type: Boolean, default: false },
        idCity: { type: String },
        idCategory: { type: String },
        idCustomer: { type: String },
        images: { type: [Image] },
    },
);

module.exports = mongoose.model('Ad', Ad);
