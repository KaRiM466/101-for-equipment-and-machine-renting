const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// تسجيل مستخدم جديد
router.post('/register', async(req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ msg: 'User or email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Error in registration' });
    }
});

// تسجيل الدخول
router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ msg: 'Error in login' });
    }
});

// جلب بيانات المستخدم
router.get('/user', async(req, res) => {
    const token = req.header('Authorization') ? .split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) return res.status(404).json({ msg: 'User not found' });

        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;