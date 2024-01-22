const User = require('../model/User');

const loginUser = async (req, res) => {
    const user = req.body;
    console.log(user)
    console.log(user);
    const result = await User.findOne({ $and: [{ email: user.email }, { password: user.password }] });
    res.status(200).json(result);
}

module.exports = loginUser;