const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/', cardController.getAllCards);
router.post('/', cardController.createCard);
router.patch('/:id/move', cardController.moveCard);
router.delete('/:id', cardController.deleteCard);

module.exports = router;
