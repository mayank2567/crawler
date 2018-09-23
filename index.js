const puppeteer = require('puppeteer');
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
    await page.goto('http://gndeclogin.blogspot.com/2018/01/guru-nanak-dev-engineering-college.html');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  } catch (err) {
    console.log("err ", err);

  }
}

setInterval(() => {
  crawl()
},2000);