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
import {isResolutionCorrect} from "../../utils/common";

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


  if (!isResolutionCorrect(req.body.availableResolutions)) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
    return;
  }

  const newVideo: VideoDBType = {
    ...req.body,
    id: Date.now() + Math.random(),
  };
  db.videos = [...db.videos, newVideo];

  res.status(201).json(JSON.stringify(newVideo));
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
