"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoController = void 0;
const db_1 = require("../db/db");
const createVideoController = (req, res) => {
    const errors = inputValidation(req.body);
    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors);
        return;
    }
    const newVideo = Object.assign(Object.assign({}, req.body), { id: Date.now() + Math.random() });
    db_1.db.videos = [...db_1.db.videos, newVideo];
    res
        .status(201)
        .json(newVideo);
};
exports.createVideoController = createVideoController;
