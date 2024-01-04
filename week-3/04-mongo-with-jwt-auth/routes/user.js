const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Admin, User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await User.create({
    username,
    password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({ username, password });
  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
});

router.get("/courses", async (req, res) => {
  const allCourses = await Course.find({});
  res.json({
    courses: allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const { username } = req;
  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const { username, password } = req.headers;
  const user = await User.findOne({
    username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses,
  });
});

module.exports = router;
