import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const user = new Schema({
  username: { type: String, required: true },
  userid: { type: String, required: true },
  password: { type: String, required: true },
});

user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 4);
});

user.methods.isPassMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

user.statics.isUserCheck = async function (userid) {
  return await userModel.findOne({ userid });
};

user.methods.isAccessToken = async function () {
  return jwt.sign(
    {
      userid: this.userid,
      username: this.username,
    },
    process.env.SECRET,
    { expiresIn: "2d" }
  );
};

const userModel = model("user", user);

export { userModel };
