// import EventModel from '../../models/EventModel';
// import waterfall from 'async';
import request from 'request';

const eventHandler = (req, res, next) => {

    console.log('eventHandler');
    request({
        method: 'GET',
        url: 'http://divoland.dp.ua',
        // параметры GET-запроса
        // index.php?param=edit&value=10

    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            // валидация и
            // обработка полученного ответа, заголовков
            console.log(body);
            // result now equals 'done'
            res.status(200).json({ body: body });

        }
    })




};

export default eventHandler;
