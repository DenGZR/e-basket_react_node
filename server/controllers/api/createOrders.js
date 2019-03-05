


const createOrders = (req, res, next) => {
    console.log('createOrders!!!');
    
    // const { user, orders } = JSON.stringify(req.body);
    const { user, orders } = req.body;
    console.log("user", user);
    console.log("orders", orders);

    res.status(200).json({user, orders});

};

export default createOrders;