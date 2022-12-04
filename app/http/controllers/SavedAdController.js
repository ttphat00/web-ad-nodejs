const SavedAd = require('../../models/SavedAd');

class SavedAdController {
    async index(req, res, next) {
        try {
            const ads = await SavedAd.find({});
            return res.json(ads);
        } catch (error) {
            return next(error);
        }
    }

    // async show(req, res, next) {
    //     try {
    //         const ad = await Ad.findById(req.params.id);
    //         return res.json(ad);
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    async show(req, res, next) {
        try {
            const ad = await SavedAd.findOne({ idAd: req.params.id, idCustomer: req.customer._id });
            return res.json(ad);
        } catch (error) {
            return next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            await SavedAd.deleteOne({ idAd: req.params.id, idCustomer: req.customer._id });
            return res.json('Deleted successfully!');
        } catch (error) {
            return next(error);
        }
    }

    async store(req, res, next) {
        
        let newAd = new SavedAd({
            ...req.body,
            idCustomer: req.customer._id,
        });

        try {
            await newAd.save();
            return res.json(newAd);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new SavedAdController();
