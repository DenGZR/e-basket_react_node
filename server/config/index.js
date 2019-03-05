module.exports = {
  db: {
    dev: 'mongodb://localhost:27017/beautyShopDev',
    prod: ''
  },
  server: {
    port: 9111
  },
  baseUrl: 'http://lefarma.ru',
  isProd: process.env.NODE_ENV === 'production',
};
