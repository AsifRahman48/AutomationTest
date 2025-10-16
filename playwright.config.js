"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: ".env.stage" });
exports.default = (0, test_1.defineConfig)({
    testDir: 'src/pages',
    fullyParallel: true,
    workers: 1,
    reporter: [['html']],
    expect: {
        timeout: 7000
    },
    use: {
        baseURL: process.env.BASE_URL,
        screenshot: "on",
        video: "on",
        viewport: { height: 500, width: 700 },
        headless: false,
        browserName: "firefox"
    }
});
//# sourceMappingURL=playwright.config.js.map