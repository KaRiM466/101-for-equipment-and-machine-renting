const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },
    companyName: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    details: { type: String, required: true },
    delivery: { type: String, required: true }, // "yes" or "no"
    rentalFrom: { type: String, required: true },
    rentalTo: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;