const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

// const items = require('./routes/api/items');

const app = express();

app.use(express.json());

//
const db = config.get('mongoURI');
// connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use routes
// app.use('/api/items', require('./routes/api/items'));
app.use('/api/sign-up', require('./routes/api/users'));
app.use('/api/sign-in', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
