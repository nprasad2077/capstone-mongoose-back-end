const mongoose = require('./connection')
const User = require('../models/UserModel')

const userData = require('./seed.json')

User.deleteMany()
    .then(() => User.insertMany(userData))
    .then(console.log)
    .catch(console.error)
    .finally(process.exit)

module.exports = mongoose