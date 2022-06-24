

// const { User, Character, Movie } = require("../models");


async function reset(req, res) {
  return res.json({ status: "Ok" });
}

module.exports = {
  reset,
}