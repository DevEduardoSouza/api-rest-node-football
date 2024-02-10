import { Router } from "express";
import LiveMatch from "../controllers/LiveMatchController.js";

const routes = Router();

routes.get("/live-match", LiveMatch.getAll);
routes.post("/live-match", LiveMatch.create);

export default routes;
