const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//Create, find, update, delete
router.get("/", userController.view);

module.exports = router;
