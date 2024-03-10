import { Response } from "express";
import { db } from "../../db/db";
import { RequestWithBody } from "../../types/common-types";
import {
  InputVideoType,
  OutputErrorsType,
  OutputVideoType,
} from "../../models/videos";
import { VideoDBType } from "../../types/video";

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

  const newVideo: VideoDBType = {
    ...req.body,
    id: Date.now() + Math.random(),
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
