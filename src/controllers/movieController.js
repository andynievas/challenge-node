

const { Character, Movie, Genre } = require("../models");


// GET /movies?name=nombre
// GET /movies?genre=idGenero
// GET /movies?order=ASC | DESC


async function index(req, res) {

  if (req.query.name) {
    try {
      const movies = await Movie.findAll({
        where: {
          title: req.query.name
        },
        order: [['title', req.query.order || "ASC"]],
        limit: 10
      });
      return res.json({ status: "Ok", movies });
    } catch (error) {
      console.log(error);
      return res.json({ status: "Server error" });
    }
  } else if (req.query.genre) {
    try {
      const movies = await Movie.findAll({
        where: {
          '$name$': req.query.genre,
        },
        limit: 10,
        attributes: { exclude: ['genreId'] },
        include: [{
          model: Genre,
          attributes: ["name", "image"]
        }],
        order: [['title', req.query.order || "ASC"]],
      });

      return res.json({ status: "Ok", movies });
    } catch (error) {
      console.log(error);
      return res.json({ status: "Server error" });
    }
  } else {
    try {
      const movies = await Movie.findAll({
        limit: 10,
        order: [['title', req.query.order || "ASC"]],
      });

      return res.json({ status: "Ok", movies });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: "Server error" });
    }
  }
}

async function store(req, res) {
  try {
    const movie = await Movie.create(req.body);
    return res.json({ status: "Ok", movie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server error" });
  }
}

async function update(req, res) {
  try {
    const movies = await Movie.findAll();
    return res.json({ status: "Ok", movies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server error" });
  }
}

async function destroy(req, res) {
  try {
    const movies = await Movie.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json({ status: "Ok", movies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server error" });
  }
}

module.exports = {
  index,
  store,
  update,
  destroy
}