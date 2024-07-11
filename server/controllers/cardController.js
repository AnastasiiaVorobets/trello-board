const Card = require('../models/Card');

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find().populate('listId');
    console.log('All cards:', cards);
    res.json(cards);
  } catch (err) {
    console.error('Error fetching cards:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.createCard = async (req, res) => {
  const card = new Card({
    title: req.body.title,
    listId: req.body.listId,
  });

  try {
    const newCard = await card.save();
    console.log('New card created:', newCard);
    res.status(201).json(newCard);
  } catch (err) {
    console.error('Error creating card:', err);
    res.status(400).json({ message: err.message });
  }
};

exports.moveCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    card.listId = req.body.listId;
    await card.save();
    console.log('Card moved:', card);
    res.json(card);
  } catch (err) {
    console.error('Error moving card:', err);
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    console.log('Card deleted with ID:', req.params.id);
    res.json({ message: 'Card deleted' });
  } catch (err) {
    console.error('Error deleting card:', err);
    res.status(500).json({ message: err.message });
  }
};
