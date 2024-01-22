const User = require('../model/User');

const registration = async (req, res, next) => {
    // console.log('registration route');
    const user = req.body;
    // console.log(user);
    const result = await User.create(user);
    res.status(200).json(result);
}

module.exports = registration;