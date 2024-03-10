"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someController = exports.videosRouter = void 0;
const express_1 = require("express");
const getVideosController_1 = require("./getVideosController");
// import {createVideoController} from './createVideoController'
// import {findVideoController} from './findVideoController'
// import {deleteVideoController} from './deleteVideoController'
exports.videosRouter = (0, express_1.Router)();
exports.videosRouter.get('/', getVideosController_1.getVideosController);
const someController = (req, res) => {
};
exports.someController = someController;
const inputValidation = (video) => {
    const errors = {
        errorsMessages: []
    };
    // ...
    if (!Array.isArray(video.availableResolution)
        || video.availableResolution.find(p => !Resolutions[p])) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution'
        });
    }
    return errors;
};
