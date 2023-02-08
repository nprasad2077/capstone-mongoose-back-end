const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/UserRoute')
const app = express();
require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(routes)
const PORT = process.env.PORT || 8080;


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Mongodb Connected..."))
.catch((err) => console.error(err));

  
app.listen(PORT, () => {
  console.log('app listening on port ' + PORT);
});
