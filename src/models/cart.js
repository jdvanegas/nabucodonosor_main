import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  code: String,
  switchedOn: Boolean,
  lastOn: { type: Date, default: Date.now },
  lastOff: { type: Date, default: Date.now }
});

export default model('Cart', cartSchema);