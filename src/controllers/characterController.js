

const { Character, Movie } = require("../models");


// GET /characters?name=nombre
// GET /characters?age=edad
// GET /characters?movies=idMovie


async function index(req, res) {
  try {
    const characters = await Character.findAll({
      limit: 10,
      attributes: ["name", "image"]
    });
    return res.json({ status: "Ok", characters });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Server error" });
  }
}

async function store(req, res) {
  try {
    const characters = await Character.create(req.body);
    return res.json({ status: "Ok", characters });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Server error" });
  }
}

async function update(req, res) {
  try {
    delete req.body.id;
    const characters = await Character.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ status: "Ok", characters });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Server error" });
  }
}

async function destroy(req, res) {
  try {
    const characters = await Character.destroy({
      where: {
        name: req.params.name
      }
    });
    return res.json({ status: "Ok", characters });
  } catch (error) {
    console.log(error);
    return res.json({ status: "Server error" });
  }
}

module.exports = {
  index,
  store,
  update,
  destroy
}