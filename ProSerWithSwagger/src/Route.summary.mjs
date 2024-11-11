import userRoutes from "./Routes/user.routes.mjs";
import { verifyToken } from "./Middlewares/token.middleware.mjs";
import productRoutes from "./Routes/Product.routes.mjs";

const routeSummary = (app) => {
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", verifyToken, productRoutes);
};

export { routeSummary };
