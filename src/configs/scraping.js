import { initBrowser } from "./puppeteerUtils.js";
import * as cheerio from "cheerio";

export const scraping = async () => {
  const page = await initBrowser();
  await page.goto("https://www.youtube.com/");
};
