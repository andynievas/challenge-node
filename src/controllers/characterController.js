

const { Character, Movie } = require("../models");

async function index(req, res) {
  try {
    //const queen = await Profile.create({ name: 'Queen' });

    // await amidala.addProfile(queen, { through: { selfGranted: false } });

    const amidala = await Character.create({
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

    const amidala2 = await Character.create({
      name: 'andy2',
    });
    await amidala2.addMovie(1);

    const characters = await Character.findAll({ include: Movie });
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