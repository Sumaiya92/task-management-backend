import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.model.js';

const registerRoute = express.Router();

registerRoute.post('/', async (req, res) => { // Changed route to '/'
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

export default registerRoute;
