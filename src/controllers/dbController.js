
const dbInitialSetup = require("../dbInitialSetup");

async function reset(req, res) {
  await dbInitialSetup();
  return res.json({ status: "Ok" });
}

module.exports = {
  reset,
}