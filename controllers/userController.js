const UserModel = require("../models/UserModel")

module.exports.getUser = async (req, res) => {
    const user = await UserModel.find();
    res.send(user)
}

module.exports.saveUser = async (req, res) => {
    const {name, latitude, longitude, favoritePlanet, photoUrl, notes, post, comment, postPhoto} = req.body;

    UserModel
        .create({name, latitude, longitude, favoritePlanet, photoUrl, notes, post, comment, postPhoto})
        .then((data) =>{
            console.log('Add Success!')
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err))
}