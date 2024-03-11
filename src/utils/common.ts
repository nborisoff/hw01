import { RESOLUTIONS } from "../const/videos";

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
