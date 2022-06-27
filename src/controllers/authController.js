

const { User } = require("../models");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
      return res.status(400).json({ status: "User already exists" })
    } else {
      await User.create(req.body);
      return res.json({ status: "Ok" })
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server error" })
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
      const correctPassword = await user.checkPassword(req.body.password);
      if (correctPassword) {
        const newPayload = {
          sub: user.email,
          name: user.name,
        };
        const newJwt = jwt.sign(newPayload, process.env.JWT_SECRET);
        return res.json({ status: "Ok", access_token: newJwt });
      }
    }
    return res.status(400).json({ status: "Invalid credentials" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server error" })
  }
}

module.exports = {
  register,
  login
}