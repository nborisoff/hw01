"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = void 0;
const db_1 = require("../../db/db");
// import {OutputVideoType} from '../input-output-models/video-models'
const getVideos = (req, res) => {
    let videos = db_1.db.videos;
    // if (Object.keys(req.query)) {
    //   videos = videos.filter((c) => c.title.indexOf(req.query.title) > -1);
    // }
    res.status(200).json(videos.map((video) => {
        return video;
    }));
};
exports.getVideos = getVideos;
