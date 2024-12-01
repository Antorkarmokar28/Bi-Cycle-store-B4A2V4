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

export const orderBicycleService = {
  createBicycleOrderIntoDb,
};
