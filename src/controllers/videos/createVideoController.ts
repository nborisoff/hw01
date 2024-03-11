import { Response } from "express";
import { db } from "../../db/db";
import { RequestWithBody } from "../../types/common-types";
import {
  InputVideoType,
  OutputErrorsType,
  OutputVideoType,
} from "../../models/videos";
import { VideoDBType } from "../../types/videos";
import { HTTP_STATUSES } from "../../app/settings";
import { addDays, isResolutionCorrect } from "../../utils/common";
import { RESOLUTIONS } from "../../const/videos";

export const createVideo = (
    req: RequestWithBody<InputVideoType>,
    res: Response<OutputVideoType>,
) => {
  const errors = inputValidation(req.body);

  if (errors.errorsMessages.length) {
    res.status(HTTP_STATUSES.BAD_REQUEST_400).json(errors);
    return;
  }

  const date = addDays(new Date().toISOString(), 1);

  const newVideo: VideoDBType = {
    id: Date.now() + Math.random(),
    createdAt: new Date().toISOString(),
    publicationDate: date,
    canBeDownloaded: false,
    minAgeRestriction: null,
    availableResolutions: req.body.availableResolutions || null,
    author: req.body.author,
    title: req.body.title,
  };

  db.videos = [...db.videos, newVideo];

  res.status(HTTP_STATUSES.CREATED_201).json(newVideo);
};

const inputValidation = (video: InputVideoType) => {
  const errors: OutputErrorsType = {
    errorsMessages: [],
  };

  if (!isResolutionCorrect(video.availableResolutions!)) {
    errors.errorsMessages.push({
      message: "resolution error",
      field: "availableResolution",
    });
  }

  if (!video.title) {
    errors.errorsMessages.push({
      message: "title error",
      field: `${video.title}`,
    });
  }

  if (!video.author) {
    errors.errorsMessages.push({
      message: "author error",
      field: `${video.author}`,
    });
  }

  return errors;
};
