const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const listRoutes = require('./routes/listRoutes');
const cardRoutes = require('./routes/cardRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/lists', listRoutes);
app.use('/api/cards', cardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
