// Middleware for handling auth
const jwt = require("jsonwebtoken")
const secret = require("../index");
const { JWT_SECRET } = require("../Config");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    //authorization= Bearer "jhdcjwebfij"
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
    if (decodedValue.username) {
        next()
    } else {
        res.status(403).json({
            msg: "You are not Authenticated"
        })
    }

}

module.exports = adminMiddleware;