'use strict';
const puppeteer = require('puppeteer');

module.exports.hello = async (event, context, callback) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(event.url, { waitUntil: 'networkidle2' });
    const data = await page.evaluate(() => document.documentElement.outerHTML);

    console.log(data);

    await browser.close();
    callback(null)
  } catch(e) {
    callback(e)
  }
};
