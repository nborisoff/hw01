import { Response } from "express";
import { db } from "../../db/db";
import { RequestWithBody } from "../../types/common-types";
import { InputVideoType, OutputVideoType } from "../../models/videos";
import { VideoDBType } from "../../types/videos";
import { HTTP_STATUSES } from "../../app/settings";
import { isResolutionCorrect } from "../../utils/common";
import { RESOLUTIONS } from "../../const/videos";

export const createVideo = (
  req: RequestWithBody<InputVideoType>,
  res: Response<OutputVideoType>,
) => {
  // const errors = inputValidation(req.body)
  // if (errors.errorsMessages.length) {
  //     res
  //         .status(400)
  //         .json(errors)
  //     return
  // }
  if (req.body.availableResolutions && !isResolutionCorrect(req.body.availableResolutions)) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const newVideo: VideoDBType = {
    id: Date.now() + Math.random(),
    createdAt: new Date().toISOString(),
    publicationDate: new Date().toISOString(),
    canBeDownloaded: true,
    minAgeRestriction: 0,
    availableResolutions: [RESOLUTIONS.p144],
    ...req.body,
  };

  db.videos = [...db.videos, newVideo];

  res.status(201).json(newVideo);
};


// const inputValidation = (video: InputVideoType) => {
//   const errors: OutputErrorsType = {
//     errorsMessages: [],
//   };
//   // ...
//   if (
//     !Array.isArray(video.availableResolution) ||
//     video.availableResolution.find((p) => !Resolutions[p])
//   ) {
//     errors.errorsMessages.push({
//       message: "error!!!!",
//       field: "availableResolution",
//     });
//   }
//   return errors;
// };
