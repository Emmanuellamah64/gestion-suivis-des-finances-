const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');

// Ajouter une transaction
router.post('/add', auth, async (req, res) => {
  const { amount, date, category, description, tags } = req.body;
  try {
    const newTransaction = new Transaction({
      amount,
      date,
      category,
      description,
      tags,
      userId: req.user.id
    });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Obtenir les transactions
router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
