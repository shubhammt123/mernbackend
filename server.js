const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDb = require("./config/db");

const app = express();

// rest api
// get , post , put , delete

let data = [];

connectDb();

app.use(express.json());
app.use(cors());



app.use("/users",userRoutes);
app.use("/products",productRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

// mvc on ecommerce - lupsum - 100- 200  - model  controller routes
// user management - "/getAllUsers" , "/getUserById" , "/getUserBySearch" ,  "/create-user", "/updateUser" , "/delete-user"
// product Managent -  "/getAllProducts" , "getProductById" , "/getProductBySearch" ,  "/getProductByCategory" , "/updateProduct" ,   "/deleteProduct"
// order management - "/create-order" , "/getOrderByUserId" , "/deleteOrder" ,  "/getAllOrder"