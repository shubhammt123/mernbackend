const express = require("express");

const router =  express.Router();

router.get("/getAllProducts",(req,res)=>{  // http://localhost:3000/products/getAllProducts
    res.send("All Products Fetched");
})

module.exports = router;