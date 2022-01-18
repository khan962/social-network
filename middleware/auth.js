const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  //checking token
  if (!token) {
    return res.status(401).json({
      msg: "no token found",
    });
  }
  try {
    const decoded = jwt.verify(token, config.get("secretToken"));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("internal server error");
  }
};
