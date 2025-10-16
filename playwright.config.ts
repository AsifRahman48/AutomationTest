import {defineConfig} from "@playwright/test";
import {config} from "dotenv";

config({ path: ".env.stage" });

export default defineConfig({
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
})