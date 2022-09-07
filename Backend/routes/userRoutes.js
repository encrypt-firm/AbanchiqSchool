const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    userProfile
} = require('./../controllers/userController')


router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', userProfile);



module.exports = router 