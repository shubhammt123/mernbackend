const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : [true , "User name is required"]
    },
    email : {
        type :  String,
        required : true,
        unique : [true ,  "Email should be unique"]
    },
    password : {
        type :  String,
        required : true
    },
    role : {
        type : String,
        required : true,
        default : "ADMIN"
    }
});

module.exports = mongoose.model("User",userSchema);