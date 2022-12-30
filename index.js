const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
app.use(express.json())
const PORT = process.env.PORT | 8080;



app.get('/', (req, res) => {
    res.send('Hello World');
  });

  
app.listen(4000, () => {
  console.log('app listening on port ' + PORT);
});
