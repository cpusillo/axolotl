const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  title: {type: String, required: true},
  venue: {type: String, required: true},
  type: {type: String, required: true},
  address: {type: String, required: true},
  extended_address: {type: String, required: true},
  date: {type: String, required: true},
  url: {type: String, required: true},
  notes: {type: String},
  user: {type: String}
});

const events = mongoose.model("events", eventsSchema);

module.exports = events;
