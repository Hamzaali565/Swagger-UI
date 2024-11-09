import mongoose from "mongoose";

const DbConnect = async () => {
  try {
    console.log("Connecting . . . .");

    const myConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected at ${myConnection.connection.host}`);
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit(1);
  }
};

export { DbConnect };
