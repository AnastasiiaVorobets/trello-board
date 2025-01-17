const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  listId: {
    type: Schema.Types.ObjectId,
    ref: 'List',
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);
