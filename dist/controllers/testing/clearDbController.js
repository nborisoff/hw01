"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearDb = void 0;
const settings_1 = require("../../app/settings");
const db_1 = require("../../db/db");
const clearDb = (req, res) => {
    db_1.db.videos = [];
    res.sendStatus(settings_1.HTTP_STATUSES.NO_CONTENT_204);
};
exports.clearDb = clearDb;
