const connection = require("../database/connection");
const express  = require("express");
const router   = express.Router();
const TaskController = require("../controllers/TaskController");

router.post("/task", TaskController.newTask);
router.get("/task/:id", TaskController.listTaskById);
router.get("/task", TaskController.listTasks);

module.exports = router