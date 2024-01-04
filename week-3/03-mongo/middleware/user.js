const { User } = require("../db/index");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;
  User.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({
        message: "Invalid Credentials",
      });
    }
  });
}

module.exports = userMiddleware;
