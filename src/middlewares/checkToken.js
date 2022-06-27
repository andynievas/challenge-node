
const jwt = require("jsonwebtoken");

async function checkToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization ? authorization.slice(7, authorization.length) : "null";

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    if (decoded) {
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ status: "Unauthorized" });
  }
}

module.exports = checkToken;
