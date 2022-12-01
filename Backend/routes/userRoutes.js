const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    userProfile
} = require('./../controllers/userController')

// protecting my routes
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect ,userProfile);



module.exports = router 