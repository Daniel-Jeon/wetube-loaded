import express from "express";
import { edit, see, upload, videoDelete } from "../controllers/videoController";

const videoRouter = express();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", videoDelete);

export default videoRouter;
