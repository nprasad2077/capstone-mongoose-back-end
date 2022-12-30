const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    latitude: String,
    longitude: String,
    favoritePlanet: [String],
    photoUrl: String,
    notes: [String],
    post: [String],
    comment: [String],
    postPhoto: [String],
})



module.exports = mongoose.model('user', userSchema)