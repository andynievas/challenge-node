

const { Character, Movie } = require("../models");

async function index(req, res) {
    try {
        const movies = await Movie.findAll();
        return res.json({ msg: "Ok", movies });
    } catch (error) {
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