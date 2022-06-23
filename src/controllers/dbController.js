

// const { User, Character, Movie } = require("../models");


async function index(req, res) {
  return res.json({ msg: "Ok" });
}

module.exports = {
  index,
}