"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideo = void 0;
const db_1 = require("../../db/db");
const createVideo = (req, res) => {
    // const errors = inputValidation(req.body)
    // if (errors.errorsMessages.length) {
    //     res
    //         .status(400)
    //         .json(errors)
    //     return
    // }
    const newVideo = Object.assign(Object.assign({}, req.body), { id: Date.now() + Math.random() });
    db_1.db.videos = [...db_1.db.videos, newVideo];
    res.status(201).json(newVideo);
};
exports.createVideo = createVideo;
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
