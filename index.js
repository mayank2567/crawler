const puppeteer = require('puppeteer');
const cheerio = require('cheerio')

const fetch = require('node-fetch');
let proxyIP = '104.199.224.4';
const crawl = async () => {
  try {
    var body = {
      location: 'all',
      pickVendor: 'do'
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
      headless: true,
      args: [
        `--proxy-server=${proxyIP}:8001`,
        `--ignore-certificate-errors`
      ]
    });
    const page = await browser.newPage();
    await page.goto('http://gndeclogin.blogspot.com/2018/01/guru-nanak-dev-engineering-college.html');
    await page.waitFor(1000);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(bodyHTML)
    let pages = collectInternalLinks($);
    pages.map(async (page) => {
      const page = await browser.newPage();
      console.log("page ", page);
      await page.goto(page);
    })
    await browser.close();
  } catch (err) {
    console.log("err ", err);

  }
}

function collectInternalLinks($) {
  let pages = [];
  var relativeLinks = $("a[href]");
  relativeLinks.each(function() {
    pages.push($(this).attr('href'));
  });
  pages = pages.filter(page => page.startsWith('https://'));
  console.log("Found " + pages.length + " relative links on page");
  return pages;
}
crawl();


