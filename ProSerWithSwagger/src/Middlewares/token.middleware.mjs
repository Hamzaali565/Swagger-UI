import { asyncHandler } from "../Utilities/AsyncHandler.mjs";
import { ApiError } from "../Utilities/ApiError.mjs";
import jwt from "jsonwebtoken";

const verifyToken = asyncHandler(async (req, _, next) => {
  const token = req.cookie.token;
  if (!token)
    throw new ApiError("User-Credentials unavailable to proceed further..");
  const decode = jwt.verify(token, "topsecret");
  if (!decode) throw new ApiError(400, "Invalid Access");
  req.user = decode.userid;
  next();
});

export { verifyToken };
