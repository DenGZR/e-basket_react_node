// Web scraping in Node
import rp from 'request-promise';
import cheerio from 'cheerio';

const baseUrl = 'https://mebel-ikea.com.ua';

const getCatalog = (req, res, next) => {
    console.log('req.body', req.body);
    const scrapingUrl = req.body.url || '';
    const isRootPage = !scrapingUrl;
    const result = {};
    console.log('getCatalog!!!', scrapingUrl);   

    getDataFromUrl(baseUrl+scrapingUrl).then($ => {
        if(isRootPage) {
            result.subMenu = getRootSubMenuLinks($);
            result.categoriesList = getRootCategoriesList($);
        }
        if(isSubCategoriesListPage($)) {
            result.subMenu = getSubMenuLinks($);
            result.categoriesList = getCategoriesList($);
        }
        // if(isCategoriesGoodsListPage($)) {
        //     result.subMenu = getGoodsSubMenuLinks($);
        //     result.goodsList = getGoodsList($);
        // }
        // if(isCategoriesGoodsViewPage($)) {
        //     result.subMenu = getRootSubMenuLinks($);
        //     result.categoriesList = getRootCategoriesList($);
        // }

        
        res.status(200).json(result);
    });   
};
// helpers


const isSubCategoriesListPage = $ => $('#content .categories.list.sub').length;
const isCategoriesGoodsListPage = $ => $('#content .categories.goods.list').length;
const isCategoriesGoodsViewPage = $ => $('#content .goods.view').length;

// root page
const getRootSubMenuLinks = $ => $('#top-menu .sub-menu a').map((i, item) => ({
    url: $(item).attr('href'),
    title: $(item).text(),
    icon: $(item).find('i').attr('class'),
})).get();
const getRootCategoriesList = $ => $('#content .categories.list a').map((i, item) => ({
    url: $(item).attr('href'),
    title: $(item).find('.title').text(),
    descriptions: $(item).find('.img > span').text(),
    img: $(item).find('.img').attr('style'), 
})).get();

//  categories list page
const getSubMenuLinks = $ => $('#content .categories.list.sub .sub-menu a').map((i, item) => ({
    url: $(item).attr('href'),
    title: $(item).text(),    
})).get();

const getCategoriesList = $ => $('#content .categories.list.sub .item').map((i, item) => ({
    url: $(item).find('.main').attr('href'),
    title: $(item).find('.title').text(),   
    img: $(item).find('.img').attr('style'),
    subCat: $(item).find('.sub-cat').map((i, link) => ({
        url: $(link).attr('href'),
        title: $(link).text(),   
    })).get(),  
})).get();

// goods list page
const getGoodsSubMenuLinks = $ => $('#content .categories.list.sub .sub-menu a').map((i, item) => ({
    url: $(item).attr('href'),
    title: $(item).text(),    
})).get();

const getGoodsList = $ => $('#content .categories.goods.list .items').map((i, item) => ({
    url: $(item).find('.main').attr('href'),
    title: $(item).find('.title').text(),   
    img: $(item).find('.img').attr('style'),
    subCat: $(item).find('.sub-cat').map((i, link) => ({
        url: $(link).attr('href'),
        title: $(link).text(),   
    })).get(),  
})).get();

// goods view page

export default getCatalog;