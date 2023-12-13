const path = require('path');

const DataModel = require('../models/dataModel');

module.exports = {
  showHomePage: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  },

  processForm: async (req, res) => {
    try {
      const { parameter1, parameter2 } = req.body;

      // Save data to MongoDB
      const newData = new DataModel({
        parameter1,
        parameter2,
      });

      await newData.save();

      res.send('Data saved to the database!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving data to the database.');
    }
  },
};
