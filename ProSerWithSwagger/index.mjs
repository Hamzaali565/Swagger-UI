import { app } from "./src/app.mjs";
import * as dotenv from "dotenv";
import { DbConnect } from "./src/Database/DbConfig.mjs";
dotenv.config();

DbConnect()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server Runnig at PORT ${process.env.PORT} \n Connected`);
    });
  })
  .catch(() => {
    console.log(`Failed to connect with server`);
  });
