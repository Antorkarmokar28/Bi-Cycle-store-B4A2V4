import { Bicycle } from '../bicycle/bicycle.model';
import { IOrderData } from './order-bicycle.interface';
import Order from './order-bicycle.model';
// Bicycle order create
const createBicycleOrderIntoDb = async (orderData: IOrderData) => {
  const product = await Bicycle.findById(orderData.product);
  if (!product) {
    throw new Error('Product not found');
  }
  // Check stock availability
  if (product.quantity < orderData.quantity) {
    throw new Error('Insufficient stock');
  }
  // check the product quantity and update the inStock status
  product.quantity -= orderData.quantity;
  product.inStock = product.quantity > 0;
  await product.save();
  const result = await Order.create(orderData);
  return result;
};
// will total revenue into mongodb databse
const calculateTotalRevenue = async (): Promise<number> => {
  const result = await Order.aggregate([
    {
      $project: {
        totalOrderPrice: { $multiply: ['$quantity', '$totalPrice'] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalOrderPrice' },
      },
    },
  ]);
  // If result exists, return the total revenue, else return 0
  return result.length > 0 ? result[0].totalRevenue : 0;
};
export const orderBicycleService = {
  createBicycleOrderIntoDb,
  calculateTotalRevenue,
};
