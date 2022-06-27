

async function emptyFields(req, res, next) {

  if (req.body.email && req.body.password) {
    next()
  }
  else {
    res.status(400).json({ status: "Empty fields" });
  }
}

module.exports = emptyFields;
