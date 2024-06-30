const { jwtAuthMiddleware, generateJWT } = require('../auth/jwt');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res)=>{
    const { name, email, phone, role, password } = req.body;

    if(!name || !email || !phone || !role || !password) {
        return res.status(400).json({ error: "Please fill all the fiels." });
    }

    try {
        // check if the user exists or not
        const user = await User.findOne({ email: email });
        if(user) {
            return res.status(200).json({ error: "User with this email already exists." });
        }

        // create the user data
        const newUser = new User(req.body);
        const response = await newUser.save();
        console.log('data saved');
    
        // now, generate the token
        const payload = {
            id: response.id
        };

        const token = generateJWT(payload);
        res.status(200).json({
            message: "User registered successfully",
            response: response,
            token: token
        });
    } catch(err) {
        res.status(400).json({ error: `Error in registering the user: ${err}` });
    }
});

module.exports = router;