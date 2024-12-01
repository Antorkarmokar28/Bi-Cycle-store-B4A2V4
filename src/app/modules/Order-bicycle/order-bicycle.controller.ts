import { Request, Response } from 'express';
import { orderBicycleService } from './order-bicycle.service';
import { createOrderValidation } from './order-bicycle.validation';
// This function manage request and response for post order data into mongodb database
const createBicycleOrder = async (req: Request, res: Response) => {
  try {
    // accept data in payload variable
    const orderData = req.body;
    //validation order data using zod
    const validateOrderProduct = createOrderValidation.parse(orderData);
    const result =
      await orderBicycleService.createBicycleOrderIntoDb(validateOrderProduct);
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      orderData: result,
    });
  } catch (error: unknown) {
    //using type asertion for catch the error type
    const err = error as Error;
    // If an error occurs, handle it here
    if (err.message === 'Product not found') {
      return res.status(404).json({ message: err.message });
    } else if (err.message === 'Insufficient stock') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({
      Message: error instanceof Error ? error.message : 'Something went wrong',
      status: false,
      error,
    });
  }
};

export const bicycleOrderController = {
  createBicycleOrder,
};
