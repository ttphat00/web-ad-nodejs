const City = require('../../models/City');

class CityController {
    async index(req, res, next) {
        try {
            const cities = await City.find({});
            return res.json(cities);
        } catch (error) {
            return next(error);
        }
    }

    async show(req, res, next) {
        try {
            const city = await City.findById(req.params.id);
            return res.json(city);
        } catch (error) {
            return next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            await City.deleteOne({ _id: req.params.id });
            return res.json('Deleted successfully!');
        } catch (error) {
            return next(error);
        }
    }

    async store(req, res, next) {
        const newCity = new City({
            ...req.body,
        });
        try {
            await newCity.save();
            return res.json({ cityName: req.body.cityName });
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            await City.updateOne({ _id: req.params.id }, req.body);
            return res.json('Updated successfully!');
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new CityController();
