const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Customer = new Schema(
    {
        name: { type: String },
        email: { type: String, unique: true },
        password: { type: String },
        phone: { type: String, default: null },
        address: { type: String, default: null },
        avatar: {
            type: String,
            default:
                'https://res.cloudinary.com/petshop347/image/upload/v1647709187/icon_uyz033.png',
        },
        gender: { type: String, default: null },
        accountBalance: { type: Number, default: 100000 },
    },
);

module.exports = mongoose.model('Customer', Customer);
