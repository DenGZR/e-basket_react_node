const getOrders = (req, res, next) => {
    console.log('getOrders!!!');
    console.log("Data", req.body);
    res.status(200).json(req.body);

};

export default getOrders;