"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = void 0;
const express_1 = require("express");
const clearDbController_1 = require("./clearDbController");
exports.testingRouter = (0, express_1.Router)();
exports.testingRouter.delete("/all-data", clearDbController_1.clearDb);
