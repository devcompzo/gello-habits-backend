const express = require("express");

const controller = require("../controller/habitsController");

const router = express.Router();

router.get("/habits", controller.getAllHabits);

router.get("/habits/:id", controller.getHabit);

router.delete("/habits/:id", controller.deleteHabit);

router.put("/habits/:id", controller.updateHabit);

router.post("/habits", controller.createHabit);

router.post("/logs", controller.registerHabitLog);

router.get("/logs", controller.getAllHabitLogs);

module.exports = router;
