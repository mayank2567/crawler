const puppeteer = require('puppeteer');
const cheerio = require('cheerio')
var browserSession;
const chromeArg = require('./chromeArgGenerator');
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
    browserSession = await chromeArg.getbrowserSession(`${proxyIP}:8001`, undefined, undefined, undefined);
    console.log("browserSession ", browserSession);
    console.log("proxyIP ", proxyIP);
    const browser = await puppeteer.launch({
      headless: true,
      args: browserSession.args
    });
    const page = await browser.newPage();
    await page.setUserAgent(browserSession.userAgent);
    await page.setViewport(browserSession.viewPort);
    await page.goto('http://www.expertfitness.ml/', {waitUntil: 'networkidle2'});
    // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    const linkHandlers = await page.$x('//*[@class="chitikaAdBlock"]');
    
    if (linkHandlers.length > 0) {
      for(let i=0;i<linkHandlers.length;i++)
      await linkHandlers[i].click();
    }
    await page.waitFor(10000);
    await new Promise((resolve) => setTimeout(()=> resolve()),10000)
    // const $ = cheerio.load(bodyHTML)
    // let pages = collectInternalLinks($);
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
for (let i = 0; i < 5; i++) {
  crawl();
}
// setTimeout(() => {
//   process.exit(0);
// }, 30000);


