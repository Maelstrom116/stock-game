const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, './components/index.html'));
});

// app.use('/styles')

app.listen(3000); // listens to port 3000
