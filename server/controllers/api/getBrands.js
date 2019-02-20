
import { scrape } from '../helpers';
import { baseUrl } from '../../config';

export const getAllBrands = (req, res, next) => {
    console.log('getBrands!!!', baseUrl);
    console.log('getBrands!!!', req);
     
    const getDataByHtml = () => 
        Array.from(document.querySelectorAll('#container .content .manufacturer-list'))
            .map(listItem=> {
                const heading = listItem.querySelector('.manufacturer-heading').innerText;
                const contents = Array.from(listItem.querySelectorAll('.manufacturer-content li a')).map(item => ({
                    text: item.innerText,
                    href: (item.href || '').replace("http://lefarma.ru/", "http://localhost:9001/api/brands?brand=")
                }));

                return {
                    heading,
                    contents,
                };
            });

    scrape(`${baseUrl}/brands`, getDataByHtml).then((data) => {
        console.log("Data", data);
        res.status(200).json(data);
    });

};

export const getBrand = (req, res, next) => {
    console.log('getBrand!!!', baseUrl);
    const brandName = req.params.brandName;
    
    const getDataByHtml = () => 
        Array.from(document.querySelectorAll('#container #content .product'))
            .map(listItem=> {
                const img = listItem.querySelector('.image img').src;
                const description = listItem.querySelector('.product-about .name a').innerText;
                const productLink = listItem.querySelector('.product-about .name a').href;
                const price = listItem.querySelector('.price').innerText;

                return {
                    img,
                    description,
                    productLink,
                    price
                };
            });

    scrape(`${baseUrl}/${brandName}`, getDataByHtml).then((data) => {
        console.log("Data", data);
        res.status(200).json(data);
    });

};