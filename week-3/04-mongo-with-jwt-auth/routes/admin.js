const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await Admin.create({
    username,
    password,
  });

  res.json({
    message: `Admin created successfully`,
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await Admin.find({ username, password });
  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, imageLink, price } = req.body;
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const allCourses = await Course.find({});
  res.json({
    courses: allCourses,
  });
});

module.exports = router;
