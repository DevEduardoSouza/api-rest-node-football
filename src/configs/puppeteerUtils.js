import puppeteer from "puppeteer";
import puppeteerConfigs from "./puppeteerConfigs.js";

const resetColor = "\x1b[0m";
const greenColor = "\x1b[32m";
const redColor = "\x1b[31m";

export const initBrowser = async () => {
  try {
    const browser = await puppeteer.launch(puppeteerConfigs);
    console.log(`${greenColor}✅ Browser aberto com sucesso${resetColor}`);
    const page = await browser.newPage();
    return page;
  } catch (error) {
    console.error(
      `${redColor}❌ Erro ao abrir o navegador: ${error}${resetColor}`
    );
  }
};
