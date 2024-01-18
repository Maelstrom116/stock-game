const http = require('https');
const stocksController = {};
const model = require('./stocksModel.js');

stocksController.getPrices = (req, res, next) => {
  console.log('---> ENTERING GET PRICE STOCKS CONTROLLER <---');
  console.log('req.params: ', req.params);
  const ticker = req.params.id;
  const url1 = 'https://api.polygon.io/v2/aggs/ticker/';
  const url2 =
    '/range/1/day/2023-01-09/2023-01-09?apiKey=w79pptWA9LPbLe_4Gjg83M9Ip4ywV2up';
  const url = url1 + ticker + url2;
  fetch(
    url
    // 'https://api.polygon.io/v2/aggs/ticker/F/range/1/day/2023-01-09/2023-01-09?apiKey=w79pptWA9LPbLe_4Gjg83M9Ip4ywV2up'
  )
    .then((res) => res.json())
    .then((data) => {
      res.locals.test = data.results[0].o;
      return next();
    });
  //ADD SOME ERROR HANDELING with a CATCH
};

stocksController.fetchMongo = async (req, res, next) => {
  try {
    const stockList = await model.Stocks.find();
    console.log(stockList[0].ticker);
    const stockArray = [];
    stockList.forEach((stock) => {
      const newStock = [];
      newStock.push(
        stock.ticker,
        stock.price,
        stock.quantity,
        stock.totalValue
      );
      stockArray.push(newStock);
    });
    res.locals.stockList = stockArray;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in fetchMongo Controller',
      status: 500,
      message: { err: 'An error occurred.' },
    });
  }
};

stocksController.postMongo = async (req, res, next) => {
  try {
    console.log('---> ENTERING POST MONGO CONTROLLER <---');
    // console.log(req.params); //Do you have any params?
    const { ticker, price, quantity, totalValue } = req.body;
    const newStock = await model.Stocks.create({
      ticker,
      price,
      quantity,
      totalValue,
    });
    console.log(`Sent to Mongo`);
    res.locals.postMongo = newStock;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in postMongo Controller',
      status: 500,
      message: { err: 'An error occurred.' },
    });
  }
};
module.exports = stocksController;
