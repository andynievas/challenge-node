

async function checkToken(req, res, next) {

  if (req.body.user != "andy") {
    next()
  }
  else {
    res.json({ status: "No authenticated" });
  }

}

module.exports = checkToken;
