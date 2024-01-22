const express = require('express');

const getAllUsers = async (req, res, next) => {
    res.status(200).json({ message: 'user added successfully' });
}

module.exports = getAllUsers;