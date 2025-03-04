const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req,res)=>{ // http://localhost:3000/users/getAllUsers
    try {
        const users = await User.find();
        res.send({message : "User Fetched" , data : users});
    } catch (error) {
        res.send({message : "error" , error : error});
    }
    
}

// get one user api

exports.getUserById = async (req,res)=>{
    try {
        // console.log(req.params.id);
        const user = await User.findById(req.params.id);
        res.status(200).send({message : "User Fetched" , data : user});
    } catch (error) {
        res.status(500).send({message : "error", error : error.message});
    }
}

exports.updateUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const body = req.body;

        const user = await User.findByIdAndUpdate(id , body , {new : true});
        res.status(202).send({message : "User Updated" , data : user});
    } catch (error) {
        res.status(500).send({message : "error"});
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.status(202).send({message : "User Deleted" , data : user})
    } catch (error) {
        res.status(500).send({message : "error",error : error.message});
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

exports.signup = async(req,res)=>{
    try {
        let body = req.body;
        let userKeys = Object.keys(body);
        if(!userKeys.length) return res.status(400).send({error : "All Fileds are required"});
        const user = await User.findOne({email : req.body.email });
        if(user) return res.status(400).send({error : "User Already exists"});
        const updatedPassword = await bcrypt.hash(req.body.password , 10);
        const newUser = new User({...req.body , password : updatedPassword});
        await newUser.save();
        res.status(201).send({message : "Account Created" ,  data : newUser});
    } catch (error) {
        res.status(500).send({message : "error" , error : error.message});
    }
}

exports.login = async (req,res)=>{
    try {
        const existingUser = await User.findOne({email  : req.body.email});
        if(!existingUser) return res.status(404).send({error : "User not found"});
        const isMatch = await bcrypt.compare(req.body.password , existingUser.password);
        if(!isMatch) return res.status(401).send({error : "Incorrect Password"});
        let token = jwt.sign({ role : existingUser.role , id : existingUser._id } , "your-jwt-secret" , {expiresIn : "1h"} );
        res.status(202).send({message : "Login Sucessful" , token : token});
    } catch (error) {
        res.status(500).send({message : "error" , error : error.message});
    }
}

// exports.getUserById = (req,res)=>{ // http://localhost:3000/users/getUserById
//     res.send("User Fetched By Id");
// };

// product apis
