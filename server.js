const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, './components/index.html'));
});

// app.use('/styles')

// app.use('/build', express.static(path.join(__dirname, './build')));

app.listen(3000); // listens to port 3000
