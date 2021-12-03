// Mongoose connecting to my Atlas database.

const mongoose = require('mongoose');
const config = require('./config');

const url = `mongodb+srv://clav-8325:Yzll1t791kZBmilO@jc-cluster39.tfcn9.mongodb.net/horse-db?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });


module.exports = () => {
    return mongoose.connect(url, connectionParams);
};

