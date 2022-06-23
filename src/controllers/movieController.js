

const { Character, Movie, Genre } = require("../models");


// GET /movies?name=nombre
// GET /movies?genre=idGenero
// GET /movies?order=ASC | DESC


async function index(req, res) {

  if (req.params.genre) {
    try {
      const movies = await Movie.findAll({
        where: {
          '$Genre.name$': "action",
          limit: 2
        },
        include: Genre
      });
      return res.json({ msg: "Ok", movies });
    } catch (error) {
      console.log(error);
      return res.json({ msg: "Server error" });
    }
  } else if ("quiero una sola" && req.params.name) {
    try {
      const movies = await Movie.findOne({
        include: [{
          model: Character,
          through: {
            attributes: []
          }
        }]
      });
      return res.json({ msg: "Ok", movies });
    } catch (error) {
      console.log(error);
      return res.json({ msg: "Server error" });
    }
  } else if ("quiero todas") {
    try {
      const movies = await Movie.findAll({
        where: {
          limit: 2
        }
      });
      return res.json({ msg: "Ok", movies });
    } catch (error) {
      console.log(error);
      return res.json({ msg: "Server error" });
    }
  }


  try {
    const movies = await Movie.findAll({
      include: [{
        model: Character,
        through: {
          attributes: []
        }
      }]
    });
    return res.json({ msg: "Ok", movies });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Server error" });
  }
}

async function store(req, res) {
  try {
    const movies = await Movie.findAll();
    return res.json({ msg: "Ok", movies });
  } catch (error) {
    return res.json({ msg: "Server error" });
  }
}

async function update(req, res) {
  try {
    const movies = await Movie.findAll();
    return res.json({ msg: "Ok", movies });
  } catch (error) {
    return res.json({ msg: "Server error" });
  }
}

async function destroy(req, res) {
  try {
    const movies = await Movie.findAll();
    return res.json({ msg: "Ok", movies });
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