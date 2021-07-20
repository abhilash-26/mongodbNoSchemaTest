const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

require("dotenv").config();

mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected To the database");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT || 7080;

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
});

app.use("/app", require("./routes/indexRoute"));
