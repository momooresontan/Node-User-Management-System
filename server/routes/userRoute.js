const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//Create, find, update, delete
router.get("/", userController.view);

router.post("/", userController.find);

router.get("/adduser", userController.newUser);

module.exports = router;
