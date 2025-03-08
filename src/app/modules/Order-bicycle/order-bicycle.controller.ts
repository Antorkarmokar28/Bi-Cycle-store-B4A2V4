import { Request, Response } from 'express';
import { orderBicycleService } from './order-bicycle.service';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
// This function manage request and response for post order data into mongodb database
const createBicycleOrder = catchAsynch(async (req, res) => {
  const userEmail = req.user.userEmail;
  const payload = req.body;
  const result = await orderBicycleService.createBicycleOrderIntoDb(
    userEmail,
    payload,
  );
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Order is successfull',
    data: result,
  });
});
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
