const mongoose = require('mongoose')


const goalSchema = mongoose.Schema({
    Text :{
        type:String,
        required: [true, 'please add text']
    }
}
    ,{
        timestamps: true,
    }
)


module.exports = mongoose.model('Goal', goalSchema)