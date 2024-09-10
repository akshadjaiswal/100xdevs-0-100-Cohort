const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../Config");
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })
    res.json({
        msg: "User Created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.send({
        Courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    console.log(username)
    try {
        await User.updateOne({
            username: username
        }, {
            "$push": {
                purchasedCourses: courseId,
            }
        })
    }
    catch (e) {
        console.log(e)
    };
    res.json({
        msg: "Purchased Completed Successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    })
    // console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        msg: courses
    })
});

module.exports = router