//@DESC  REGISTER NEW USER ****POST METHOD*****
// @ROUTE   /api/user
// @Access   Public
const registerUser =(req, res) =>{
    res.status(200).json({
        message : 'User Registered'
    })
}
//@DESC  Authenticate  USER ****POST METHOD*****
// @ROUTE   /api/user/login
// @Access   Public
const loginUser =(req, res) =>{
    res.status(200).json({
        message : 'logged in user'
    })
}
//@DESC  get USER profile/data ****GET METHOD*****
// @ROUTE   /api/user/profile
// @Access   Public
const userProfile =(req, res) =>{
    res.status(200).json({
        message : 'User Profile'
    })
}






module.exports = {
    registerUser,
    loginUser,
    userProfile
}