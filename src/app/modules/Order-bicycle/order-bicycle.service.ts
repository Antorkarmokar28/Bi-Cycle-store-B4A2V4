import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/appError';
import { Bicycle } from '../bicycle/bicycle.model';
import { IOrderData } from './order-bicycle.interface';
import Order from './order-bicycle.model';

// Bicycle order create
const createBicycleOrderIntoDb = async (
  userEmail: string,
  payload: IOrderData,
) => {
  let totalPrice = 0;
  const product = await Bicycle.findById(payload.product);
  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Product is not found');
  }
  if (product.quantity < payload.quantity) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Insufficient stock');
  }
  product.quantity -= payload.quantity;
  product.inStock = product.quantity > 0;
  totalPrice += product.price * payload.quantity;
  const order = await Order.create({
    email: userEmail,
    product,
    quantity: payload.quantity,
    totalPrice,
    status: payload.status,
  });
  return order;
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
