import { Schema, model } from "mongoose";

const product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const productModel = model("product", product);

export { productModel };
