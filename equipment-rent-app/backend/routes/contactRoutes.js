const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// إضافة استفسار جديد
router.post('/inquiry', async(req, res) => {
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

module.exports = router;