import { Response } from "express";
import { RequestWithParams } from "../../types/common-types";
import { videoIdModel } from "../../models/videos";
import { VideoDBType } from "../../types/video";
import { db } from "../../db/db";
import { HTTP_STATUSES } from "../../app/settings";

export const findVideo = (
  req: RequestWithParams<videoIdModel>,
  res: Response<VideoDBType>,
) => {
  let video = db.videos.find((c) => c.id === +req.params.id);

  if (!video) {
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
    return;
  }

  res.status(200).json(video);
};
