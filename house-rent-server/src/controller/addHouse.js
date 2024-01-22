const House = require('../model/HouseModel');

const addHouse = async (req, res, next) => {
    // console.log('addHouse route');
    const house = req.body;
    // console.log(user);
    const result = await House.create(house);
    res.status(200).json(result);
}

module.exports = addHouse;