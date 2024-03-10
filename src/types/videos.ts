import {RESOLUTIONS} from "../const/videos";

export type VideoDBType = {
  id: number;
  title: string;
  author: string;
  availableResolutions: RESOLUTIONS[];
  canBeDownloaded?: boolean;
  minAgeRestriction?: number;
  createdAt?: string;
  publicationDate?: string;
};
