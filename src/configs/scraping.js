import { initBrowser } from "./puppeteerUtils.js";
import * as cheerio from "cheerio";

const url = process.env.SCRAPING_SITE;

export const scraping = async () => {
  try {
    const page = await initBrowser();
    await page.goto(url);

    /**
     *  ========== -> Clicar em Ao vivo <- ==========
     */

    await page.waitForSelector(
      "#live-table > div.filters > div.filters__group > div:nth-child(2)",
      { timeout: 10000 }
    );

    const elemento = await page.$(
      "#live-table > div.filters > div.filters__group > div:nth-child(2)"
    );

    await elemento.click();
    /**
     *  ========== -> END <- ==========
     */
  } catch (error) {
    console.log("Error", error);
  }
};
