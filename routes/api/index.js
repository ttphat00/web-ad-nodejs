const authRouter = require('./auth');
const customerRouter = require('./customers');
const categoryRouter = require('./categories');
const adRouter = require('./ads');
const cityRouter = require('./cities');
const orderRouter = require('./orders');
const savedAdRouter = require('./savedads');

function route(app) {
    //api users
    app.use('/api/auth', authRouter);
    app.use('/api/customers', customerRouter);

    //api categories
    app.use('/api/categories', categoryRouter);

    //api ads
    app.use('/api/ads', adRouter);

    //api saved ads
    app.use('/api/saved-ads', savedAdRouter);

    //api cities
    app.use('/api/cities', cityRouter);

    //api orders
    app.use('/api/orders', orderRouter);

    app.use('/', function (req, res) {
        res.send('Hello!!!');
    });
}

module.exports = route;
