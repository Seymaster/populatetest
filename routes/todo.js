const express  = require("express");
const router   = express.Router();
const todoController = require("../controllers/todo");

// POST /saves account
router.post("/todo", todoController.createTodo);

// GET / returns all bank accounts of a user
router.get("/todo/:id", todoController.getTodos)

// PUT / Update a bank account of a user
// router.put("/todo/:id", todoController.updatetodo);

// // DELETE / Deletes a bank account of a user
// router.delete("/todo/:id", todoController.delonetodo)






module.exports = router;