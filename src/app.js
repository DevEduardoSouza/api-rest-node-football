import express from "express";
import routes from "./routes/routes.js";
import { connection } from "./db/connection.js";
import { scraping } from "./configs/scraping.js";

const app = express();

scraping();

app.use(express.json());

app.use(routes);

connection();

export default app;
