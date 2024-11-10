import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./Constants/SwaggerUi.mjs";
import { routeSummary } from "./Route.summary.mjs";

const app = express();
app.use(express.json());

const specs = swaggerJSDoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

routeSummary(app);

export { app };
