import { User, Order } from '../../models';


const createOrders = async (req, res, next) => {
    console.log('createOrders!!!');
    let user;
    let order;

    try{
        user = await User.findOne({ phone: req.body.user.phone});
        
        if (!user) {
            user = new User({
                name: req.body.user.name,
                phone: req.body.user.phone,
                email: req.body.user.email  
            });
        }
        console.log('user', user);
        order = new Order({
            createdBy: user._id,
            products: req.body.orders
        });
        console.log('order', order);

        // const resOrder = await order.save();
        res.status(200).json({order});
    
      } catch (err){
        if (err.name === 'MongoError' && err.code === 11000) {
          res.status(409).send(new MyError('Duplicate key', [err.message]));
        }
    
        res.status(500).send(err);
      }
    
    // const { user, orders } = JSON.stringify(req.body);
    // const { user, orders } = req.body;
    // console.log("user", user);
    // console.log("orders", orders);

    // res.status(200).json({user, orders});

};

export default createOrders;