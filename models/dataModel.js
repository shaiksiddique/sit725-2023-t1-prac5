const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  parameter1: String,
  parameter2: String,
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
