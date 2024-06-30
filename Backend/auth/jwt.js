const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(!authorization) {
        return res.status(401).json({ error: 'Token not found' });
    }

    const token = authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        // verification of token
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedPayload;
        next();
    } catch(err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

const generateJWT = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

module.exports = { jwtAuthMiddleware, generateJWT };