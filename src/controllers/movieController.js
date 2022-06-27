

const { Character, Movie, Genre } = require("../models");


// GET /movies?name=nombre
// GET /movies?genre=idGenero
// GET /movies?order=ASC | DESC


async function index(req, res) {

  const queryOptions = {
    order: [['title', req.query.order || "ASC"]],
    limit: 10,
    where: {}
  }

  if (req.query.name) {
    queryOptions.where.title = req.query.name;
    queryOptions.attributes = {
      exclude: ["id", "genreId"]
    };
    queryOptions.include = [{
      model: Character,
      attributes: ["name", "image"],
      through: {
        attributes: []
      }
    }];
    try {
      const movie = await Movie.findOne(queryOptions);
      return res.json({ status: "Ok", movie });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: "Server error" });
    }
  }
  if (req.query.genre) {
    queryOptions.where['$name$'] = req.query.genre;
    queryOptions.attributes = ["title", "image", "release_date"];
    queryOptions.include = [{
      model: Genre,
      attributes: ["name", "image"]
    }];
  }

  try {
    const movies = await Movie.findAll(queryOptions);
    return res.json({ status: "Ok", movies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server error" });
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