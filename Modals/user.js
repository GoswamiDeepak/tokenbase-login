const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        
    },
    phone : {
        type : String,
        required : true,
    },
    image : {
        type : String
    }
},{ timestamps: true })

const User = mongoose.model("UserData", userSchema)

module.exports = User;