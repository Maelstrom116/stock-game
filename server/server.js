const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const users = require('./routes/users');

app.use('/api/users', users);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './client')));

app.get('/api', (req, res) => {
  res.send('hello world from express!');
});

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, './client/index.html'));
// });

// app.use('/styles')

// app.use('/build', express.static(path.join(__dirname, './build')));

app.use((req, res) => {
  res.status(404).send('This is not where you trade stonks');
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
}); // listens to port 3000

module.exports = app;
