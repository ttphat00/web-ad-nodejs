const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SavedAd = new Schema(
    {
        
        idAd: { type: String },
        idCustomer: { type: String },
    },
);

module.exports = mongoose.model('SavedAd', SavedAd);
