// import EventModel from '../../models/EventModel';
// import waterfall from 'async';
import request from 'request';

const getAuth = (req, res, next) => {

    console.log('getAuth');
    res.status(200).json({
        role: 'admin',
        token: '873987293847298'
    });





};

export default getAuth;
