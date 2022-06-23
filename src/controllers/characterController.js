

const { Character, Movie } = require("../models");


// GET /characters?name=nombre
// GET /characters?age=edad
// GET /characters?movies=idMovie


async function index(req, res) {
  try {
    false && await Character.create({
      name: 'andy',
      movies: [{
        title: 'Queen',
        image: "holiu",
        release_date: "ayer",
        rating: 1,
      }]
    }, {
      include: Movie
    });

    const characters = await Character.findAll({
      include: Movie,
      through: {
        attributes: []
      }
    });
    return res.json({ msg: "Ok", characters });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Server error" });
  }
}

async function store(req, res) {
  try {
    const characters = await Character.findAll();
    return res.json({ msg: "Ok", characters });
  } catch (error) {
    return res.json({ msg: "Server error" });
  }
}

async function update(req, res) {
  try {
    const characters = await Character.findAll();
    return res.json({ msg: "Ok", characters });
  } catch (error) {
    return res.json({ msg: "Server error" });
  }
}

async function destroy(req, res) {
  try {
    const characters = await Character.findAll();
    return res.json({ msg: "Ok", characters });
  } catch (error) {
    return res.json({ msg: "Server error" });
  }
}

module.exports = {
  index,
  store,
  update,
  destroy
}