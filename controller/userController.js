exports.getAllUsers = (req,res)=>{
    res.send("All Users Fetched");
}

exports.getUserById = (req,res)=>{ // http://localhost:3000/users/getUserById
    res.send("User Fetched By Id");
};