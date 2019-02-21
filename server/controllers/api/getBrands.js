
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
                    href: (item.href || '').replace("http://lefarma.ru/", "http://localhost:9001/api/brands/")
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

                    return `/product/${urlParamsArr[urlParamsArr.length-1]}`;
                };
                const img = listItem.querySelector('.image img').src;
                const description = listItem.querySelector('.product-about .name a').innerText;
                const productLink = getProductLink(listItem.querySelector('.product-about .name a').href);
                const price = listItem.querySelector('.price').innerText;

                return {
                    img,
                    description,
                    productLink,
                    price
                };
            });

    scrape(`${baseUrl}/${brandName}/?limit=100`, getDataByHtml).then((data) => {
        console.log("Data", data.length);
        res.status(200).json(data);
    });

};

