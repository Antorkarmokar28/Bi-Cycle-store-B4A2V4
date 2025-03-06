import { Request, Response } from 'express';
import { orderBicycleService } from './order-bicycle.service';

// import { createOrderValidation } from './order-bicycle.validation';
// This function manage request and response for post order data into mongodb database
const createBicycleOrder = async (req: Request, res: Response) => {
  try {
    // accept data in payload variable
    const orderData = req.body;
    //validation order data using zod
    // const validateOrderProduct = createOrderValidation.parse(orderData);
    const result =
      await orderBicycleService.createBicycleOrderIntoDb(orderData);
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: unknown) {
    //using type asertion for catch the error type
    const err = error as Error;
    // If an error occurs, handle it here
    if (err.message === 'Product not found') {
      res.status(404).json({ message: err.message });
      return;
    } else if (err.message === 'Insufficient stock') {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(500).json({
      Message: error instanceof Error ? error.message : 'Something went wrong',
      status: false,
      error,
    });
  }
};
// This function manage request and response for total revenue of order product data
const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderBicycleService.calculateTotalRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error calculating revenue',
      status: false,
      error,
    });
  }
};
export const bicycleOrderController = {
  createBicycleOrder,
  getTotalRevenue,
};
