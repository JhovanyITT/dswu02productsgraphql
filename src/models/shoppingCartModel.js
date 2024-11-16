const mongoose = require('mongoose');

const shoppingCartModel = new mongoose.Schema({
    user: {
      _id: { type: String, required: true },
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true }
    },
    product: [
      {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, enum: ['ELECTRONICS', 'CLOTHING', 'FOOD', 'TOYS'], required: true },
        brand: { type: String, required: true },
        stock: { type: Number, default: 0 },
        creationDate: { type: Date, default: Date.now },
        imgs: [String],
        facturapiid: { type: String, required: true }
      }
    ],
    subtotal: { type: Number, required: true, default: 0 },
    IVA: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true, default: 0 },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
    creationDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: null }
  });

module.exports = mongoose.model('ShoppingCart', shoppingCartModel);