import { RESOLUTIONS } from "../const/videos";
import {
  InputVideoType,
  OutputErrorsType,
  UpdateVideoModel,
} from "../models/videos";

export const isResolutionCorrect = (arr: RESOLUTIONS[]) => {
  const correctValues = Object.values(RESOLUTIONS);
  let i = 0;

  arr.forEach((resolution) => {
    if (!correctValues.includes(resolution)) i++;
  });

  return i === 0;
};

export const addDays = function (str: string, days: number) {
  let myDate = new Date(str);

  myDate.setDate(myDate.getDate() + days);

  return myDate.toISOString();
};

export const inputValidation = (video: UpdateVideoModel) => {
  const errors: OutputErrorsType = {
    errorsMessages: [],
  };

  const {
    title,
    author,
    availableResolutions,
    canBeDownloaded,
    minAgeRestriction,
    publicationDate,
  } = video;

  if (!isResolutionCorrect(availableResolutions!)) {
    errors.errorsMessages.push({
      message: "resolution error",
      field: "availableResolution",
    });
  }

  if (!title) {
    errors.errorsMessages.push({
      message: "title error",
      field: `title`,
    });
  }

  if (!author) {
    errors.errorsMessages.push({
      message: "author error",
      field: `author`,
    });
  }

  if (typeof canBeDownloaded !== "boolean") {
    errors.errorsMessages.push({
      message: "canBeDownloaded error",
      field: `canBeDownloaded`,
    });
  }

  if (typeof minAgeRestriction !== "number") {
    errors.errorsMessages.push({
      message: "minAgeRestriction error",
      field: `minAgeRestriction`,
    });
  }

  if (typeof publicationDate !== "string") {
    errors.errorsMessages.push({
      message: "publicationDate error",
      field: `publicationDate`,
    });
  }

  return errors;
};
