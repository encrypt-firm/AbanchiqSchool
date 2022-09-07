const registerUser =(req, res) =>{
    res.status(200).json({
        message : 'User Registered'
    })

}


module.exports = {
    registerUser
}