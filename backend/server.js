const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

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
app.use("/customers", require("./routers/customerRouter.js"));
