const customerController = require('../controllers/CustomerController');

exports.isAuth = async (req, res, next) => {
    // Lấy access token từ header
    const accessTokenFromHeader = req.headers.authorization;
    if (!accessTokenFromHeader) {
        return res.status(401).json('Không tìm thấy access token!');
    }

    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    const verified = await customerController.verifyToken(
        accessTokenFromHeader,
        accessTokenSecret,
    );
    if (!verified) {
        return res
            .status(401)
            .json('Bạn không có quyền truy cập vào tính năng này!');
    }

    const customer = await customerController.getCustomer(verified.payload.email);
    req.customer = customer;

    return next();
};
