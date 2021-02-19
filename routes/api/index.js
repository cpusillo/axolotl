const router = require("express").Router();
const foodRoutes = require("./foods");

// Book routes
router.use("/foods", foodRoutes);

module.exports = router;
