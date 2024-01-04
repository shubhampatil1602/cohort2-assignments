const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: "Admin Created Successfully",
  });
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
