const express = require("express");
const connectDB = require('./db/connect');
const router = require('./routes/review-routes') 
require('dotenv').config()
const app = express();

app.use(express.json()); 
app.use("/reviews", router); 

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
