

// const { User, Character, Movie } = require("../models");

async function register(req, res) {

  // const user = User.find();

  return { status: "Ok", access_token: "123" }
}

async function login(req, res) {
  return [1, 2, 3]
}

module.exports = {
  register,
  login
}