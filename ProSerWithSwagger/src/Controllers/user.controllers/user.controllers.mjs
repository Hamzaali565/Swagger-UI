import { asyncHandler } from "../../Utilities/AsyncHandler.mjs";
import { ApiError } from "../../Utilities/ApiError.mjs";
import { ApiResponse } from "../../Utilities/ApiResponse.mjs";
import { userModel } from "../../Models/User.model/user.model.mjs";

const signup = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { username, userid, password } = req.body;
  if (![username, userid, password].every(Boolean))
    throw new ApiError(400, "All Parameters Are Required !!!");
  const userCheck = await userModel.isUserCheck(userid);
  if (userCheck) {
    throw new ApiError(400, "User ID Already Exist !!!");
  }
  const response = await userModel.create({ userid, username, password });
  res.status(200).json(new ApiResponse(200, { data: response }, "Success"));
});

const login = asyncHandler(async (req, res) => {
  const { userid, password } = req.body;
  if (![userid, password].every(Boolean))
    throw new ApiError(400, "All Parameters are required !!!");

  const userCheck = await userModel.isUserCheck(userid);

  const isMatch = await userCheck.isPassMatch(password);
  if (!isMatch) throw new ApiError(400, "Incorrect Password !!!");

  let token = await userCheck.isAccessToken();
  console.log("token", token);

  const option = {
    sameSite: "none",
    http: true,
  };

  res
    .cookie("token", token, option)
    .status(200)
    .json(new ApiResponse(200, { data: userCheck, token }, "Login Success"));
});

export { signup, login };
