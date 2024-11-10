import userRoutes from "./Routes/user.routes.mjs";

const routeSummary = (app) => {
  app.use("/api/v1", userRoutes);
};

export { routeSummary };
