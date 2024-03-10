"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideo = void 0;
const db_1 = require("../../db/db");
const settings_1 = require("../../app/settings");
const updateVideo = (req, res) => {
    let video = db_1.db.videos.find(c => c.id === +req.params.id);
    console.log(video);
    if (!video) {
        res.sendStatus(settings_1.HTTP_STATUSES.NO_CONTENT_204);
        return;
    }
    video = Object.assign(Object.assign({}, video), req.body);
    res.status(settings_1.HTTP_STATUSES.CREATED_201);
};
exports.updateVideo = updateVideo;
