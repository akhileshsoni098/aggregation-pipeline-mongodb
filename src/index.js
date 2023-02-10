const mongoose = require('mongoose')
const express = require ('express')
const route = require('./route')

const app = express()

app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://Akshay:akshay7798953554@akshaydb.e6tjw4w.mongodb.net/group14Database",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/", route);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on port 3000`);
});

