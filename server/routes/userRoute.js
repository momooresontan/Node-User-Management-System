const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//Create, find, update, delete
router.get("/", userController.overview);
router.post("/", userController.find);

router.get("/adduser", userController.newUser);
router.post("/adduser", userController.create);

router.get("/edituser/:id", userController.edit);
router.post("/edituser/:id", userController.update);

router.get("/viewuser/:id", userController.view);

router.get("/:id", userController.delete);

module.exports = router;
