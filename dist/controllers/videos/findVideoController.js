"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVideo = void 0;
const db_1 = require("../../db/db");
const settings_1 = require("../../app/settings");
const findVideo = (req, res) => {
    let video = db_1.db.videos.find((c) => c.id === +req.params.id);
    if (!video) {
        res.sendStatus(settings_1.HTTP_STATUSES.NOT_FOUND_404);
        return;
    }
    res.status(200).json(video);
};
exports.findVideo = findVideo;
