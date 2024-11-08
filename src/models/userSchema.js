const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, require: true },
    fullName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    address: {
        street: { type: String, default: null },
        exterior: { type: String, default: null },
        interior: { type: String, default: null },
        neighborhood: { type: String, default: null },
        city: { type: String, default: 'N/A' },
        municipality: { type: String, default:'N/A' },
        zip: { type: String, required: true },
        state: { type: String, default:'N/A' },
        country: { type: String, default:'N/A' }
    },
    registrationDate: { type: Date, default: Date.now },
    userTipe: { type: String, enum: ['ADMIN', 'WORKER', 'CLIENT'], default: 'CLIENT' },
    preferredPaymentMethod: { type: String, enum:['CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL', 'APPLE_PAY', 'N/A'], default: 'N/A' },
    facturapiid: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;