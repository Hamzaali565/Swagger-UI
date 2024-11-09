import express from "express";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

let app = express();
app.use(bodyParser.json());

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/books", async (req, res) => {
  let data = [
    { name: "beauty and beast" },
    { name: "Pakistan Studies" },
    { name: "Peer-e-Kamil" },
  ];

  res.status(200).json(data);
});

app.post("/books", async (req, res) => {
  let { name } = req.body;
  console.log("req.body.name", req.body.name);
  if (!name) return res.status(400).send({ message: "Name is required !!!" });
  let bookData = [];
  bookData.push({ name, author: req.body.author });
  console.log(bookData);
  res.status(200).send({ bookData });
});
