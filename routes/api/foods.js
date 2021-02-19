const router = require("express").Router();
const foodsController = require("../../controllers/foodsController");

// Matches with "/api/foods"
router.route("/")
  .get(foodsController.findAll)
  .post(foodsController.create);

// Matches with "/api/foods/:id"
router
  .route("/:id")
  .get(foodsController.findById)
  .put(foodsController.update)
  .delete(foodsController.remove);

module.exports = router;
