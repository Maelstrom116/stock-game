const express = require('express');
const app = express();
const path = require('path');
const stocksController = require('./stocksController.js');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './client')));

app.get('/api/:id', stocksController.getPrices, (req, res) => {
  console.log('---> ENTERING GET PRICE STOCKS ROUTER <---');
  console.log('res.locals router: ', res.locals.test);
  res.status(200).json(res.locals.test);
});

app.get('/db', stocksController.fetchMongo, (req, res) => {
  console.log('---> ENTERING DB ROUTER FETCH MONGO <---');
  res.status(200).json(res.locals.stockList);
});

app.post('/db', stocksController.postMongo, (req, res) => {
  console.log('---> ENTERING DB ROUTER POST MONGO <---');
  res.status(201).json(res.locals.postMongo);
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use((req, res) => {
  res.status(404).send('This is not where you trade stonks');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
}); // listens to port

module.exports = app;
