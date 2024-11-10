const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // نموذج المستخدم
const Contact = require('./models/Contact'); // نموذج الاستفسار
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5008;

// Middleware
app.use(cors()); // هذا سيسمح لجميع النطاقات بالوصول
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rentalDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// تسجيل مستخدم جديد
app.post('/api/auth/register', async(req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) return res.status(400).json({ msg: 'User or email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

// تسجيل دخول المستخدم
app.post('/api/auth/login', async(req, res) => {
    const { email, password } = req.body; // استخدام email هنا

    try {
        const user = await User.findOne({ email }); // ابحث عن المستخدم بواسطة الإيميل
        if (!user) return res.status(400).json({ msg: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token, username: user.username }); // أرجع الـ token واسم المستخدم
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

// جلب بيانات المستخدم
app.get('/api/auth/user', async(req, res) => {
    const token = req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null;
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
        const user = await User.findById(decoded.id).select('-password'); // استبعاد كلمة المرور من النتائج
        if (!user) return res.status(404).json({ msg: 'User not found' });

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

// إضافة استفسار جديد
app.post('/api/contact/inquiry', async(req, res) => {
    const {
        firstName,
        lastName,
        country,
        companyName,
        product,
        quantity,
        email,
        phone,
        details,
        delivery,
        rentalFrom,
        rentalTo
    } = req.body;

    try {
        const contact = new Contact({
            firstName,
            lastName,
            country,
            companyName,
            product,
            quantity,
            email,
            phone,
            details,
            delivery,
            rentalFrom,
            rentalTo
        });

        await contact.save();
        res.status(200).json({ msg: 'Inquiry submitted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

// بدء تشغيل الخادم
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});