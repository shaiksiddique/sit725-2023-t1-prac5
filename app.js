const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mainController = require('./controllers/mainController');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', mainController.showHomePage);
app.post('/submit', mainController.processForm);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
