"use strict";
// import {VideoDBType} from './video-db-type'
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
exports.db = {
    videos: [{
            id: 1,
            title: "t1",
            author: "a1",
            canBeDownloaded: true,
            minAgeRestriction: 16,
            createdAt: `${new Date()}`,
            publicationDate: `${new Date()}`,
            availableResolutions: ["p144"],
        }],
    // some: []
};
const setDB = (dataset) => {
    if (!dataset) {
        exports.db.videos = [];
        // db.some = []
        return;
    }
    exports.db.videos = dataset.videos || exports.db.videos;
    // db.some = dataset.some || db.some
};
exports.setDB = setDB;
