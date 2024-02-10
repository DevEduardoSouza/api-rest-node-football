import express from "express";
import routes from "./routes/routes.js";
import { connection } from "./db/connection.js";

const app = express();

app.use(express.json());

app.use(routes);

connection();

export default app;
