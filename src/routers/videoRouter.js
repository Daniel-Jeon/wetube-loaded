import express from "express";
import { edit, see, upload, videoDelete } from "../controllers/videoController";

const videoRouter = express();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", videoDelete);

export default videoRouter;
