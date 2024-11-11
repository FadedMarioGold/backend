const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = AsyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.toLowerCase().startsWith("bearer")) {
        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'User is not verified' });
            }
            req.user = decoded.user; // attach decoded token data to req.user
            next(); 
        });
    } else {
        return res.status(401).json({ message: 'Authorization token missing or malformed' });
    }
});

module.exports = validateToken;
