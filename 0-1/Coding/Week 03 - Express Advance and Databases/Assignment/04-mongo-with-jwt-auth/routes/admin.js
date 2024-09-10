const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../Config");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin Created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
        username: username,
        password: password
    })
    if (user) {

        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            msg: "Incoreect Email or Password"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
    })
    console.log(newCourse)
    res.json({
        msg: "Course created successfully",
        CourseId: newCourse._id,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    console.log(response)
    res.json({
        Courses: response,
    })
});

module.exports = router;