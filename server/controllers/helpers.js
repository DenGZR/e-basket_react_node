
import rp from 'request-promise';
import cheerio from 'cheerio';

export const getDataFromUrl = url => {       
    const options = {
        url,
        transform: body => cheerio.load(body)
    };

    return rp(options);            
};