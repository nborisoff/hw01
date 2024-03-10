"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUSES = exports.SETTINGS = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        VIDEOS: "/videos",
        TESTING: "/testing",
    },
};
exports.HTTP_STATUSES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,
};
