const express = require('express');
const mongoose = require('./DB/db');
const route = require('./Router/routes')

const port = 4000;
const app = express();

//middleware
app.use(express.json())
app.use(route)

app.listen(port, async () => {
   mongoose;
  console.log(`Server listening on port ${port}`);
});