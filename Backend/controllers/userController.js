const jwt = require('jsonwebtoken')
const bcrypt =require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('./../models/userModel')


//@DESC  REGISTER NEW USER ****POST METHOD*****
// @ROUTE   /api/user
// @Access   Public
const registerUser =asyncHandler( async(req, res) =>{
res.status(200).json({
    message : 'User Registered'
})
})
//@DESC  Authenticate  USER ****POST METHOD*****
// @ROUTE   /api/user/login
// @Access   Public
const loginUser =asyncHandler( async(req, res) =>{
    res.status(200).json({
        message : 'logged in user'
    })
})
//@DESC  get USER profile/data ****GET METHOD*****
// @ROUTE   /api/user/profile
// @Access   Public
const userProfile =asyncHandler( async(req, res) =>{
    res.status(200).json({
        message : 'User Profile'
    })
})


module.exports = {
    registerUser,
    loginUser,
    userProfile
}