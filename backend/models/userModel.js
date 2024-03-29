const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  // passwordHash: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
