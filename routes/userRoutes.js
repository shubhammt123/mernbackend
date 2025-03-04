const express = require("express");
const userController = require("../controller/userController");

console.log(userController)

const router =  express.Router();

router.get("/getAllUsers",userController.getAllUsers);

router.get("/getUserById/:id",userController.getUserById);

router.put("/updateUser/:id" , userController.updateUser);

router.delete("/deleteUser/:id" , userController.deleteUser)

router.post("/createUser",userController.createUser);

router.get("/getUserById",userController.getUserById);

router.post("/singup",userController.signup);

router.post("/login",userController.login);

module.exports = router;

// sign up  and login
