const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/review-routes') 
const app = express();

app.use(express.json());
app.use("/reviews", router); 

mongoose.connect('mongodb+srv://admin:zPg4XjyK6GdtR040@cluster0.gcz268f.mongodb.net/myDatabase?retryWrites=true&w=majority')
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
  })
.catch((err) => console.log(err));


