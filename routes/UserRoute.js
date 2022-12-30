const { Router } = require('express')
const router = Router()
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/userController')

router.get('/', getUser)

router.post('/add', createUser)

router.put('/update', updateUser)

router.delete('/delete', deleteUser)

