// const puppeteer = require('puppeteer')

const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        browser: 'chrome',
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
        waitForInitialPage: true,
    })
    const page = await browser.newPage()
    // Set screen size

    await page.goto('https://www.baidu.com', {
        waitUntil: 'networkidle2',
    })

    await page.screenshot({path: path.resolve(__dirname, './1.png')})
    await page.pdf({path: path.resolve(__dirname, './1.pdf'), format: 'A4'})
    await browser.close()
})()
