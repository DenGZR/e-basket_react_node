
import { scrape } from '../helpers';
import { baseUrl } from '../../config';

export const getAllBrands = (req, res, next) => {
    console.log('getBrands!!!', baseUrl);
    
    const getDataByHtml = () => 
        Array.from(document.querySelectorAll('#container .content .manufacturer-list'))
            .map(listItem=> {
                const heading = listItem.querySelector('.manufacturer-heading').innerText;
                const contents = Array.from(listItem.querySelectorAll('.manufacturer-content li a')).map(item => ({
                    text: item.innerText,
                    url: (item.href || '').replace('http://lefarma.ru/', '')
                }));

                return {
                    heading,
                    contents,
                };
            });

    scrape(`${baseUrl}/brands`, getDataByHtml).then((data) => {
        console.log("Data", data.length);
        res.status(200).json(data);
    });

};

export const getBrand = (req, res, next) => {
    const brandName = req.params.brandName;
    
    console.log('getBrand!!!', `${baseUrl}/${brandName}/?limit=100`);

    const getDataByHtml = () => 
        Array.from(document.querySelectorAll('#container #content .product'))
            .map(listItem=> {
                const getProductLink = (url = '') => {
                    const urlParamsArr = url.split('/');

                    return `${urlParamsArr[urlParamsArr.length-1]}`;
                };
                const removeCurrencySing = price => price.replace(/[^\d]+/g, '');

                const imgSrc = listItem.querySelector('.image img').src;
                const title = listItem.querySelector('.product-about .name a').innerText;
                const productLink = getProductLink(listItem.querySelector('.product-about .name a').href);
                const price = removeCurrencySing(listItem.querySelector('.price').innerText);

                return {
                    imgSrc,
                    title,
                    productLink,
                    price,
                };
            });

    scrape(`${baseUrl}/${brandName}/?limit=100`, getDataByHtml).then((data) => {
        console.log("Data", data.length);
        res.status(200).json(data);
    });

};

export const getProduct = (req, res, next) => {
    const productName = req.params.productName;
    console.log('getProduct!!!', `${baseUrl}/${productName}`);

    const getDataByHtml = () => 
        Array.from(document.querySelectorAll('#container #content .product-info'))
            .map(listItem=> {
                const removeCurrencySing = price => price.replace(/[^\d]+/g, '');
                const title = listItem.querySelector('h1').innerText;
                const productLink = (title || '').toLowerCase().split(' ').join('-');
                const imgSrc = listItem.querySelector('.image img.img-responsive').src;
                const description = listItem.querySelector('#tab-description > div').innerText;
                const price = removeCurrencySing(listItem.querySelector('.price .micro-price').innerText);

                return {
                    title,
                    productLink,
                    imgSrc,
                    price,
                    description,
                };
            });

    scrape(`${baseUrl}/${productName}`, getDataByHtml).then((data) => {
        console.log("Data", data.length);
        res.status(200).json(data);
    });

};