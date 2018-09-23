const puppeteer = require('puppeteer');
const cheerio = require('cheerio')

const fetch = require('node-fetch');
let proxyIP = '104.199.224.4';
const crawl = async () => {
  try {
    var body = {
      location: 'all',
      pickVendor: 'gcp'
    };
    const res = await fetch('http://server.e3sfm2eh4k.us-east-1.elasticbeanstalk.com/getRandomDCSProxy', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await res.json();
    proxyIP = json.split('-')[1];
    console.log("proxyIP ", proxyIP);
    const browser = await puppeteer.launch({
      headless: false,
      args: [
        `--proxy-server=${proxyIP}:8001`,
        `--ignore-certificate-errors`
      ]
    });
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com/watch?v=VHZAcDHv2k0');
    await page.waitFor(31000);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(bodyHTML)
    let pages = collectInternalLinks($);
    // pages.map(async (url,index) => {
    //   try {
    //     if (index == pages.length -1) {
    //       const subBrowser = await puppeteer.launch({
    //         headless: false,
    //         args: [
    //           `--proxy-server=${proxyIP}:8001`,
    //           `--ignore-certificate-errors`
    //         ]
    //       });
    //       const page = await subBrowser.newPage();
    //       console.log("page ", url);
    //       await page.goto(url);
    //       await page.waitFor(1000);
    //       await subBrowser.close();
    //     }
    //   } catch (err) {
    //     console.log("err ", err);
    //   }
    // })
    await browser.close();
  } catch (err) {
    console.log("err ", err);

  }
}

function collectInternalLinks($) {
  let pages = [];
  var relativeLinks = $("a[href]");
  relativeLinks.each(function () {
    pages.push($(this).attr('href'));
  });
  pages = pages.filter(page => page.startsWith('http'));
  console.log("Found " + pages.length + " relative links on page");
  return pages;
}

setInterval(() => {
  for (let i = 0; i < 15; i++) {
    crawl();
  }
}, 31000);


