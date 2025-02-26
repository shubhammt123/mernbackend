const express = require("express");

const router =  express.Router();

router.get("/getAllProducts",(req,res)=>{  // http://localhost:3000/products/getAllProducts
    res.send("All Products Fetched");
})

module.exports = router;

// product api  CRUD - creating , reading ,  updating , deleting
// to get all products list  - get , reading
// to get a single product - get , reading
// add product - post , creating
// delete product - delete , deleteing 
// update product - put , updating

// searching - reading
// reading
// post
// put