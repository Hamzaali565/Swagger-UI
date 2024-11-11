import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./Constants/SwaggerUI.mjs";
import { routeSummary } from "./Route.summary.mjs";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

const specs = swaggerJSDoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

routeSummary(app);

export { app };
