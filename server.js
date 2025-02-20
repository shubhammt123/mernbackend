const express = require("express");
const cors = require("cors");

const app = express();

// rest api
// get , post , put , delete

let data = [];

app.use(express.json());
app.use(cors());

app.get("/users",(req,res)=>{
    res.send(data);
});

app.post("/create-user",(req,res)=>{
    let userData = req.body;
    data.push(userData);
    res.json("User Created");
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});