import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUplold,
  postUplold,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUplold).post(postUplold);
videoRouter.route("/:id(\\d+)").get(watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
