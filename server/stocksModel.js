const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const env = require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'stocks',
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

const stockSchema = new Schema({
  ticker: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalValue: { type: Number, required: true },
});

const Stocks = mongoose.model('stocks', stockSchema);

module.exports = {
  Stocks,
};
