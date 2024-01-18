const http = require('https');
const stocksController = {};

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
};

module.exports = stocksController;
