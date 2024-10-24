import express from "express";
import { edit, watch } from "../controllers/videoController";

const videoRouter = express();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
