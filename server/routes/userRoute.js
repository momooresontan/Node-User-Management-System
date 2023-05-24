const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//Create, find, update, delete
router.get("/", userController.view);

router.post("/", userController.find);

router.get("/adduser", userController.newUser);
router.post("/adduser", userController.create);

router.get("/edituser/:id", userController.edit);
//router.patch("/edituser:id", userController.create);

module.exports = router;
