const express = require("express");
const userController = require("../controller/userController");

console.log(userController)

const router =  express.Router();

router.get("/getAllUsers",userController.getAllUsers);

router.get("/getUserById",userController.getUserById);

module.exports = router;