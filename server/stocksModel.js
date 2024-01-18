import mongoose from 'mongoose';
const Schema = mongoose;

const stockSchema = new Schema({
  ticker: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalValue: { type: Number, required: true },
});
