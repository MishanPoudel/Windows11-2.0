const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register
router.post("/", async (req, res) => {
  try {
    const { userName, password, passwordVerify } = req.body;
    // validation
    if (!userName || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    if (password.length < 6)
      return res
        .status(400)
        .json({ errorMessage: "password must be atleast 6 characters." });
    if (password != passwordVerify)
      return res.status(400).json({ errorMessage: "Passwords doesnt match." });

    const existingUser = await User.findOne({ userName });
    if (existingUser)
      return res.status(400).json({ errorMessage: "Username already in use." });

    // hash the passwords
    const salt = await bcrypt.genSalt();
    // const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db
    const newUser = new User({
      userName,
      password,
      // passwordHash,
    });

    const savedUser = await newUser.save();

    // log in the user
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a http only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// log in
router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ userName });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong username/password." });

    // const passwordCorrect = await bcrypt.compare(
    //   password,
    //   existingUser.passwordHash
    // );
    // if (!passwordCorrect)
    //   return res.status(401).json({ errorMessage: "Wrong username/password." });

    if (password !== existingUser.password)
      return res.status(401).json({ errorMessage: "Wrong username/password." });

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

module.exports = router;
