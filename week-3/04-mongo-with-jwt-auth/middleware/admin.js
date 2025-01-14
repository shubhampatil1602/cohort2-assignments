const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        message: "You are not authorized to view this content.",
      });
    }
  } catch (e) {
    res.json({
      message: "Incorrect inputs.",
    });
  }
}

module.exports = adminMiddleware;
