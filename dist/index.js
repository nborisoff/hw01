"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("./app/settings");
const app_1 = require("./app/app");
app_1.app.listen(settings_1.SETTINGS.PORT, () => {
    console.log(`App listening on port ${settings_1.SETTINGS.PORT}`);
});
