import { type VideoDBType } from "../types/videos";

export type InputVideoType = {
  title: string;
  author: string;
  availableResolutions: VideoDBType["availableResolutions"];
  canBeDownloaded?: boolean;
  minAgeRestriction?: number;
  createdAt?: string;
  publicationDate?: string;
};

export type videoIdModel = {
  /**
   * id существующего курса
   */
  id: string;
};

export type UpdateVideoModel = Partial<
  Pick<
    InputVideoType,
    | "title"
    | "author"
    | "availableResolutions"
    | "canBeDownloaded"
    | "minAgeRestriction"
    | "publicationDate"
  >
>;

export type OutputVideoType = {};
export type OutputErrorsType = {};
