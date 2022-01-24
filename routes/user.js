const express  = require("express");
const router   = express.Router();
const userController = require("../controllers/user");

// POST /saves account
router.post("/user", userController.createUser);

// GET / returns all bank accounts of a user
router.get("/user", userController.getUser)

// PUT / Update a bank account of a user
// router.put("/user/:id", userController.updateuser);

// // DELETE / Deletes a bank account of a user
// router.delete("/user/:id", userController.deloneuser)






module.exports = router;