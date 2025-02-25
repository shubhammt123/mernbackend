const User = require("../model/userModel");

exports.getAllUsers = async (req,res)=>{ // http://localhost:3000/users/getAllUsers
    try {
        const users = await User.find();
        res.send({message : "User Fetched" , data : users});
    } catch (error) {
        res.send({message : "error" , error : error});
    }
    
}

exports.createUser = async (req,res)=>{
    try {
        let body = req.body;
        let keys = Object.keys(body);
        console.log(keys)
        // console.log(body)
        if(!keys.length){
            return res.send({message : "Error" , error : "Body is required"});
        }
    const user = new User(body);
    await user.save();
    res.send({message : "User Created" , data : user});
    } catch (error) {
        console.log(error);
        res.send({message : "error" , error : error.message});
    }
}

exports.getUserById = (req,res)=>{ // http://localhost:3000/users/getUserById
    res.send("User Fetched By Id");
};