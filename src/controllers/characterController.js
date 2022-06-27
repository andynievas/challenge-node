

const { Character, Movie } = require("../models");
const { Op } = require("sequelize");


async function index(req, res) {
  const queryOptions = {};
  if (req.query.name) {
    queryOptions.name = req.query.name;
    try {
      const character = await Character.findOne({
        limit: 10,
        attributes: {
          exclude: ["id"]
        },
        where: queryOptions,
        include: [{
          model: Movie,
          attributes: ["title", "image"],
          through: {
            attributes: []
          }
        }]
      });
      if (!character) return res.json({ status: "Character not found" });
      return res.json({ status: "Ok", character });

    } catch (error) {
      // console.log(error);
      return res.json({ status: "Server error" });
    }
  }
  if (req.query.age) queryOptions.age = req.query.age;
  if (req.query.weight) queryOptions.weight_value = req.query.weight;
  if (req.query.movie) queryOptions.movie = req.query.movie;

  try {
    const characters = await Character.findAll({
      limit: 10,
      attributes: ["name", "image"],
      where: queryOptions,
    });
    return res.json({ status: "Ok", characters });

  } catch (error) {
    // console.log(error);
    return res.json({ status: "Server error" });
  }
}


async function store(req, res) {
  try {
    const character = await Character.create(req.body);
    return res.json({ status: "Ok", character });
  } catch (error) {
    // console.log(error);
    return res.json({ status: "Server error" });
  }
}

async function update(req, res) {
  try {
    delete req.body.id;
    delete req.body.name;
    const { add_related_movie, remove_related_movie } = req.body;
    const character = await Character.findOne({
      where: {
        name: req.params.name
      }
    });
    if (!character) return res.json({ status: "Character not found" });

    const update_movies = add_related_movie ? await Movie.findAll({
      where: {
        [Op.or]: add_related_movie
      }
    }) : remove_related_movie ? await Movie.findAll({
      where: {
        [Op.or]: remove_related_movie
      }
    }) : [];

    character.update(req.body);
    update_movies.map(async (movie) => await add_related_movie
      ? character.addMovie(movie)
      : character.removeMovie(movie)
    );
    await character.save();
    return res.json({ status: "Ok", character });

  } catch (error) {
    console.log(error);
    return res.json({ status: "Server error" });
  }
}

async function destroy(req, res) {
  try {
    const character = await Character.destroy({
      where: {
        name: req.params.name
      }
    });
    return res.json({ status: "Ok", character });
  } catch (error) {
    // console.log(error);
    return res.json({ status: "Server error" });
  }
}

module.exports = {
  index,
  store,
  update,
  destroy
}