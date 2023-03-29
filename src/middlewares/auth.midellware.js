const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    const token = req.headers["access-token"];
    console.log(token);
    if (!token) {
        next({
            status: 401,
            error: "unauthorized",
            message: "Not token privided"

        })
    }
    try {
        const decoded = jwt.verify(token, "andresm",{ algorithm: "HS512" })
        req.user = decoded;
        next()
    } catch (error) {
        res.status(403).json(error)
    }
};

module.exports = authenticate;