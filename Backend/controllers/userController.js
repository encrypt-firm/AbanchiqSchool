const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('./../models/userModel')


//@DESC  REGISTER NEW USER ****POST METHOD*****
// @ROUTE   /api/user
// @Access   Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fiels')
    }

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('oops! The user Exist, use Another email')
    }

    // Hashing passwords

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)



    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword

    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }

})


//@DESC  Authenticate  USER ****POST METHOD*****
// @ROUTE   /api/user/login
// @Access   Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    // check for user email
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            emal: user.email
        })
    } else {
        res.status(400)
        throw new Error('invalid user credentials, check your login details correctly')
    }

})
//@DESC  get USER profile/data ****GET METHOD*****
// @ROUTE   /api/user/profile
// @Access   Public
const userProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'logged in user'
    })
})

const userData = asyncHandler(async (req, res) => {

})


module.exports = {
    registerUser,
    loginUser,
    userProfile
}

