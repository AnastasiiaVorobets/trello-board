const List = require('../models/List');

exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.find();
    console.log('All lists:', lists);
    res.json(lists);
  } catch (err) {
    console.error('Error fetching lists:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.createList = async (req, res) => {
  const list = new List({
    title: req.body.title,
  });

  try {
    const newList = await list.save();
    console.log('New list created:', newList);
    res.status(201).json(newList);
  } catch (err) {
    console.error('Error creating list:', err);
    res.status(400).json({ message: err.message });
  }
};

exports.deleteList = async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    console.log('List deleted with ID:', req.params.id);
    res.json({ message: 'List deleted' });
  } catch (err) {
    console.error('Error deleting list:', err);
    res.status(500).json({ message: err.message });
  }
};
