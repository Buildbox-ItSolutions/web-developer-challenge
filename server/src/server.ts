import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/router";
import swaggerUi from "swagger-ui-express";

const port = 3000;
const server = express();
import swaggerDocument from "../swagger.json";

server.use(cors({ origin: "*" }));
server.use(morgan("dev"));
server.use(express.json());
server.use(router);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.listen(port, () => {
  console.log(
    `🟢 Servidor rodando em http://localhost:${port}\n ⚓ Documentação: http://localhost:${port}/api-docs`
  );
});
