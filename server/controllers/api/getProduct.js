
import { scrape } from '../helpers';
import { baseUrl } from '../../config';

export const getProduct = (req, res, next) => {
    const productName = req.params.productName;
    console.log('getProduct!!!', `${baseUrl}/${productName}`);

    const getDataByHtml = () => 
        Array.from(document.querySelectorAll('#container #content .product-info'))
            .map(listItem=> {
                const title = listItem.querySelector('h1').innerText;
                const imgSrc = listItem.querySelector('.image img.img-responsive').src;
                const description = listItem.querySelector('#tab-description > div').innerText;
                const price = listItem.querySelector('.price .micro-price').innerText;

                return {
                    title,
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