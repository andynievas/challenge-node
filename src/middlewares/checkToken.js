

async function checkToken(req, res, next) {

  if (req.body.user) {
    next()
  }
  else {
    res.json({ msg: "No authenticated" });
  }

}

module.exports = checkToken;
