import {Response} from "express";
import { RequestWithParamsAndBody } from "../../types/common-types";
import { UpdateVideoModel, videoIdModel } from "../../models/videos";
import { db } from "../../db/db";
import { HTTP_STATUSES } from "../../app/settings";
import { isResolutionCorrect } from "../../utils/common";


export const updateVideo = (
  req: RequestWithParamsAndBody<videoIdModel, UpdateVideoModel>,
  res: Response,
) => {
  // let video = db.videos.find((c) => c.id === +req.params.id);
  const index = db.videos.findIndex((item) => item.id === +req.params.id);

  if (index === -1) {
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    return;
  }

  if (
    req.body.availableResolutions &&
    !isResolutionCorrect(req.body.availableResolutions)
  ) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  // let {
  //   title,
  //   author,
  //   availableResolutions,
  //   canBeDownloaded,
  //   minAgeRestriction,
  //   publicationDate,
  // } = req.body;

  // if (video.title) video.title = title || video.title;
  // if (video.author) video.author = author || video.author;
  // if (video.availableResolutions)
  //   video.availableResolutions =
  //     availableResolutions || video.availableResolutions;
  // if (video.canBeDownloaded)
  //   video.canBeDownloaded = canBeDownloaded || video.canBeDownloaded;
  // if (video.minAgeRestriction)
  //   video.minAgeRestriction = minAgeRestriction || video.minAgeRestriction;
  // if (video.publicationDate)
  //   video.publicationDate = publicationDate || video.publicationDate;

  db.videos[index] = {...db.videos[index], ...req.body};

  res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
};
