
import rp from 'request-promise';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

export const scrape = async (url, callback) => {
    const startDate = new Date().getTime();
    const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3239.108 Safari/537.36';
    const browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({headless: false});

    let page = await browser.newPage();
    await page.setUserAgent(USER_AGENT);
    await page.goto(url);
    
    const data = await page.evaluate(callback);

    await page.close();
    await browser.close();

    console.log(`Time elapsed ${Math.round((new Date().getTime() - startDate) / 1000)} s`);
    return {
        data,
    };
};

export const getDataFromUrl = url => {       
    const options = {
        url,
        transform: body => cheerio.load(body)
    };

    return rp(options);            
};