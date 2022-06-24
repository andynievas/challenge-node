

async function emptyFields(req, res, next) {

  if (req.body.title && req.body.image && req.body.release_date && req.body.rating) {
    next()
  }
  else {
    res.status(400).json({ status: "Empty fields" });
  }
}

module.exports = emptyFields;
