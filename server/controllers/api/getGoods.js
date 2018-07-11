// Web scraping in Node
import rp from 'request-promise';
import cheerio from 'cheerio';

const getCatalog = (req, res, next) => {
    console.log('getCatalog!!!');
    const baseUrl = 'https://mebel-ikea.com.ua';
    const getDataFromUrl = (url) => {       
        const options = {
            url,
            transform: body => cheerio.load(body)
        };
    
        return rp(options);            
    };
    const getSubMenuLinks = $ => $('.sub-menu a').map((i, item) => ({
        url: $(item).attr('href'),
        title: $(item).text()
    })).get();

    getDataFromUrl(baseUrl).then($ => {
        const menuLinks = getSubMenuLinks($);
        res.status(200).json({
            data: menuLinks
        });
    });   
};

export default getCatalog;