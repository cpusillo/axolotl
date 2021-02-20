const router = require("express").Router();
const foodRoutes = require("./foods");
const eventRoutes = require("./events")

// Book routes
router.use("/foods", foodRoutes);
router.use("/events", eventRoutes)

module.exports = router;
