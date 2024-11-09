import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Setting Up Node.js with Swagger UI",
      version: "0.1.0",
      description:
        "This is a Node.js API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Practice Node.js",
        url: "https://ipd-model.vercel.app",
        email: "alimuhammadhamza402@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:3001`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

export { options };
