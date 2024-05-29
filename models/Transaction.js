const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
  description: { type: String },
  tags: [String],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
