const UserModel = require("../models/UserModel")

module.exports.getUser = async (req, res) => {
    const user = await UserModel.find();
    res.send(user)
}

module.exports.createUser = async (req, res) => {
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

module.exports.deleteUser = async (req, res) => {
    const { _id } = req.body;
    console.log('id ---> ', _id);

    UserModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send('Delete success!'))
        .catch((err) => console.log(err))
}

module.exports.updateUser = async (req, res) => {
    const {_id, name, latitude, longitude, favoritePlanet, photoUrl, notes, post, comment, postPhoto} = req.body;

    UserModel
        .findByIdAndUpdate(_id, {name, latitude, longitude, favoritePlanet, photoUrl, notes, post, comment, postPhoto})
        .then(() => res.set(201).send('update success'))
        .catch((err) => console.log(err)) 
}