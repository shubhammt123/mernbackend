const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/ibhraimEcom");
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;