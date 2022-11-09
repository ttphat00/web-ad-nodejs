const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adDetail = new Schema({
    idAd: { type: String },
    cost: { type: Number },
});

const Order = new Schema(
    {
        idCustomer: { type: String },
        orderDate: { type: Date },
        adDetails: { type: [adDetail] },
        payment: { type: String, default: 'Mặc định' },
        totalCost: { type: Number },
        approvalDate: { type: Date, default: null },
        status: { type: String, default: 'Đang chờ xác nhận' },
    },
);

module.exports = mongoose.model('Order', Order);
