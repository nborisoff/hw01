import { RequestWithParams } from "../../types/common-types";
import { videoIdModel } from "../../models/videos";
import { db } from "../../db/db";
import { HTTP_STATUSES } from "../../app/settings";

export const deleteVideo = (req: RequestWithParams<videoIdModel>, res: any) => {
  db.videos = db.videos.filter((video) => video.id !== +req.params.id);

  res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
};
