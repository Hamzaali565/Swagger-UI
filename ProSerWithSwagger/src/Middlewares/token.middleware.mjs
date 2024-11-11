import { asyncHandler } from "../Utilities/AsyncHandler.mjs";
import { ApiError } from "../Utilities/ApiError.mjs";
import jwt from "jsonwebtoken";

const verifyToken = asyncHandler(async (req, _, next) => {
  try {
    const token = req.cookies.token;
    console.log("req.cookies.token", token);

    if (!token)
      throw new ApiError("User-Credentials unavailable to proceed further..");

    const decode = jwt.verify(token, process.env.SECRET);
    console.log("here");
    console.log("decode", decode);
    if (!decode) throw new ApiError(400, "Invalid Access");
    req.user = decode.userid;
    next();
  } catch (error) {
    throw new ApiError(400, "token missing!!!");
  }
});

export { verifyToken };
