import { find } from 'lodash';
import { User, Order } from '../../models';

export const getOrders = async (req, res, next) => {
    console.log('getOrders!!!');
    let users;
    let orders;

    try{
        orders = await Order.find({});
        users = await User.find({});
        console.log('getOrders!!!', );

        users = users.map(user => ({
          id: user._id,
          email: user.email,
          name: user.name,
          phone: user.phone,
        }));

        orders = orders.map(order => {
          const user = find(users, { 'id': order.createdBy });
          return {
              id: order._id,
              createdBy: user,
              createdData: order.createdData,
          }
        });
       
        res.status(200).json({ data : orders });
    
      } catch (err){
        if (err.name === 'MongoError' && err.code === 11000) {
          res.status(409).send(new Error('Duplicate key', [err.message]));
        }
    
        res.status(500).send(err);
      }
};

export const getOrdersDetails = async (req, res, next) => {
  const orderId = req.params.orderId;
  console.log('getOrdersDetails!!!', orderId);
  let user;
  let order;

  try{
      order = await Order.findById(orderId);
      if (order) {
        user = await User.findById(order.createdBy);
      }
      
      if (order && user) {
        order = {
          id: order._id,
          createdBy: {
            id: user._id,
            name: user.name,
            phone: user.phone,
            email: user.email,
          },
          createdData: order.createdData,
          products: order.products,
        };

        res.status(200).json({ data : order });
      } else {
        res.status(200).json({ data : order });
      }
    } catch (err){
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send(new Error('Duplicate key', [err.message]));
      }
      console.log('error!!!');
      res.status(500).send(err);
    }
};
