import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const user = new Schema({
  username: { type: String, required: true },
  userid: { type: String, required: true },
  password: { type: String, required: true },
});

user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 4);
});

user.statics.isEmailCheck = async function (email) {
  return await userModel.findOne({ email });
};

const userModel = model("user", user);

export { userModel };
