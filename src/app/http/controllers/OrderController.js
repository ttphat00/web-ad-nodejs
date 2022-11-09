const Order = require('../../models/Order');

class OrderController {
    async index(req, res, next) {
        try {
            const orders = await Order.find({});
            return res.json(orders);
        } catch (error) {
            return next(error);
        }
    }

    // async showByIdCustomer(req, res, next) {
    //     try {
    //         const orders = await Order.find({ idCustomer: req.user._id });
    //         return res.json(orders);
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    // async showByIdEmployee(req, res, next) {
    //     try {
    //         const orders = await Order.find({ idEmployee: req.user._id });
    //         return res.json(orders);
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    // async showByStatus(req, res, next) {
    //     try {
    //         const orders = await Order.find(req.body);
    //         return res.json(orders);
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    async show(req, res, next) {
        try {
            const order = await Order.findById(req.params.id);
            return res.json(order);
        } catch (error) {
            return next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            await Order.deleteOne({ _id: req.params.id });
            return res.json('Deleted successfully!');
        } catch (error) {
            return next(error);
        }
    }

    async store(req, res, next) {
        try {
            let newOrder = new Order({
                idCustomer: req.customer._id,
                ...req.body,
            });

            if (!req.body.ads) {
                let ad = {
                    idAd: req.body.idAd,
                    cost: req.body.cost,
                };
                newOrder.adDetails.push(ad);
            } else {
                for (let i = 0; i < req.body.ads.length; i++) {
                    let ad = {
                        idAd: req.body.ads[i].idAd,
                        cost: req.body.ads[i].cost,
                    };
                    newOrder.adDetails.push(ad);
                }
            }

            await newOrder.save();
            return res.json(newOrder);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            await Order.updateOne(
                { _id: req.params.id },
                {
                    ...req.body,
                },
            );
            return res.json('Updated successfully!');
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new OrderController();
