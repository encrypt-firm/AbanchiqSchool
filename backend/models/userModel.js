const mongoose = require ('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name!']
    },
    email: {
        type: String,
        required: [true, 'Please add an Email!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Type in Your password!']
    }
}, 
    {
        timestamps: true
    }
)


module.exports = mongoose.model('User', userSchema)