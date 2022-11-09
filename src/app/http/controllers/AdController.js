const Ad = require('../../models/Ad');

class AdController {
    async index(req, res, next) {
        try {
            const ads = await Ad.find({});
            return res.json(ads);
        } catch (error) {
            return next(error);
        }
    }

    async show(req, res, next) {
        try {
            const ad = await Ad.findById(req.params.id);
            return res.json(ad);
        } catch (error) {
            return next(error);
        }
    }

    async showByTitle(req, res, next) {
        try {
            const ad = await Ad.findOne({ title: req.params.title });
            return res.json(ad);
        } catch (error) {
            return next(error);
        }
    }

    // async showByIdUser(req, res, next) {
    //     try {
    //         const products = await Product.find({ idUser: req.user._id });
    //         return res.json(products);
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    // async showByIdCategory(req, res, next) {
    //     try {
    //         const products = await Product.find({ idCategory: req.params.id });
    //         return res.json(products);
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    async destroy(req, res, next) {
        try {
            await Ad.deleteOne({ _id: req.params.id });
            return res.json('Deleted successfully!');
        } catch (error) {
            return next(error);
        }
    }

    // async destroyByIdUser(req, res, next) {
    //     try {
    //         await Product.deleteMany({ idUser: req.user._id });
    //         return res.json('Deleted successfully!');
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    async store(req, res, next) {
        if (!req.files) {
            next(new Error('No file uploaded!'));
            return;
        }

        let newAd = new Ad({
            ...req.body,
            idCustomer: req.customer._id,
        });

        for (let i = 0; i < req.files.length; i++) {
            let imageUrl = {
                url: req.files[i].path,
            };
            newAd.images.push(imageUrl);
        }

        try {
            await newAd.save();
            return res.json(newAd);
        } catch (error) {
            return next(error);
        }
    }

    async addImages(req, res, next) {
        if (!req.files) {
            next(new Error('No file uploaded!'));
            return;
        }
        try {
            let ad = await Ad.findById(req.params.id);
            for (let i = 0; i < req.files.length; i++) {
                let imageUrl = {
                    url: req.files[i].path,
                };
                ad.images.push(imageUrl);
            }
            await ad.save();
            return res.json('Added successfully!');
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            let ad = await Ad.findById(req.params.id);

            if (req.files.length !== 0) {
                ad.images = [];
            }

            for (let i = 0; i < req.files.length; i++) {
                let imageUrl = {
                    url: req.files[i].path,
                };
                ad.images.push(imageUrl);
            }

            ad.title = req.body.title || ad.title;
            ad.content = req.body.content || ad.content;
            ad.price = req.body.price || ad.price;
            ad.idCity = req.body.idCity || ad.idCity;
            ad.idCategory = req.body.idCategory || ad.idCategory;

            await ad.save();
            return res.json('Updated successfully!');
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new AdController();
