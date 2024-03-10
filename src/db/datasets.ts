import { DBType } from "./db";
export const existedVideoDataset: DBType = {
  videos: [
    {
      id: 1,
      title: "Title",
      author: "Author",
      canBeDownloaded: true,
      minAgeRestriction: 18,
      createdAt: `${new Date()}`,
      publicationDate: `${new Date()}`,
      availableResolutions: ["720", "1080"],
    },
  ],
};
