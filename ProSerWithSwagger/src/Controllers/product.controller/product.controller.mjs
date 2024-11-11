import { asyncHandler } from "../../Utilities/AsyncHandler.mjs";
import { ApiError } from "../../Utilities/ApiError.mjs";
import { ApiResponse } from "../../Utilities/ApiResponse.mjs";
import { productModel } from "../../Models/product.model/product.model.mjs";

const productPosting = asyncHandler(async (req, res) => {
  const { name, price, description } = req.body;
  if (![name, price].every(Boolean))
    throw new ApiError(400, "All parameters are required !!!");
  const response = await productModel.create({ name, price, description });
  return res
    .status(201)
    .json(
      new ApiResponse(200, { data: response }, "Product Post Successfully")
    );
});

export { productPosting };
