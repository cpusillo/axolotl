const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: { type: String, required: true },
  cuisines: { type: String, required: true },
  address: { type: String, required: true },
  menu_url: { type: String, required: true },
  timings: { type: String, required: true },
  reservation: {type: String},
  notes: {type: String},
  user: {type: String}

});

const food = mongoose.model("food", foodSchema);

module.exports = food;
