
import { getDataFromUrl } from '../helpers';
import { baseUrl } from '../../config';

import puppeteer from 'puppeteer';
let scrape = async (url) => {
    const startDate = new Date().getTime();
    const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3239.108 Safari/537.36';
    const browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({headless: false});

    let page = await browser.newPage();
    await page.setUserAgent(USER_AGENT);
    await page.goto(url);
    

    // const products = await page.$$eval('#res-products .product', products => {
    //     const name = products.querySelector('.name>a').innerText;
    //     const price = products.querySelector('.price').innerText;
    
    //     return {
    //         name,
    //         price,
    //     }
    // });

    // const products = await page.$$eval('#res-products .product', products => products.map(product => ({
    //         name: product.querySelector('.name>a').innerText,
    //         price: product.querySelector('.price').innerText,
    //     }))
    // );
    // console.log('products', products);
    const result = await page.evaluate(() => {
        const product = Array.from(document.querySelectorAll('#res-products .product'))
            .map(product=> {
                const name = product.querySelector('.name>a').innerText;
                const price = product.querySelector('.price').innerText;

                return {
                    name,
                    price,
                }
            });

        return product;
    });
    await page.close();
    await browser.close();

    console.log(`Time elapsed ${Math.round((new Date().getTime() - startDate) / 1000)} s`);
    return {
        result,
        // products,
    };
};



const getGoods = (req, res, next) => {
    console.log('getCatalog!!!', baseUrl);
    
    
    // const getSubMenuLinks = $ => $('.sub-menu a').map((i, item) => ({
    //     url: $(item).attr('href'),
    //     title: $(item).text()
    // })).get();

    // getDataFromUrl(baseUrl).then($ => {
    //     const menuLinks = getSubMenuLinks($);
    //     res.status(200).json({
    //         data: menuLinks
    //     });
    // });   

    scrape('http://lefarma.ru/lierac/').then((value) => {
        console.log(value); // Получилось!
        res.status(200).json({
            data: value,
        });
    });

};

export default getGoods;