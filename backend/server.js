const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

// connect to MongoDB
mongoose
  .connect(process.env.MDB_CONNECT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to MongoDB & listening on port`, process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// set up routes
app.use("/auth", require("./routers/userRouter.js"));
