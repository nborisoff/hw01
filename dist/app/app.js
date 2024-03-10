"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const settings_1 = require("./settings");
const routes_1 = require("../controllers/videos/routes");
const routes_2 = require("../controllers/testing/routes");
exports.app = (0, express_1.default)();
const parseBodyMiddleware = express_1.default.json();
exports.app.use(parseBodyMiddleware);
exports.app.use(settings_1.SETTINGS.PATH.VIDEOS, routes_1.videosRouter);
exports.app.use(settings_1.SETTINGS.PATH.TESTING, routes_2.testingRouter);
