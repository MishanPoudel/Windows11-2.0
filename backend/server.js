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
    origin: ["https://windows11-one-lyart.vercel.app"],
  })
);

// connect to MongoDB
const PORT = process.env.PORT || 5000; // Use process.env.PORT if available, otherwise use port 5000

mongoose
  .connect(process.env.MDB_CONNECT)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB & listening on port`, PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// set up routes
app.use("/auth", require("./routers/userRouter.js"));
