import { User, Order } from '../../models';

const createOrders = async (req, res, next) => {
    console.log('createOrders!!!');
    let user;
    let order;

    try{
        user = await User.findOne({ phone: req.body.user.phone});
        
        if (!user) {
            user = await User.create({
                name: req.body.user.name,
                phone: req.body.user.phone,
                email: req.body.user.email  
            });
        }
        
        order = await Order.create({
            createdBy: user._id,
            products: req.body.orders
        });
       
        res.status(200).json({order});
    
      } catch (err){
        if (err.name === 'MongoError' && err.code === 11000) {
          res.status(409).send(new Error('Duplicate key', [err.message]));
        }
    
        res.status(500).send(err);
      }
};

export default createOrders;