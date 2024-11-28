import { Request, Response } from 'express';
import { bicycleService } from './bicycle.service';
// will handling request and response manage
const createBicycle = async (req: Request, res: Response) => {
  try {
    // receive data in payload from client
    const payload = req.body;
    const result = await bicycleService.createBicycleIntoDB(payload);
    res.status(200).json({
      success: true,
      message: 'Bicycle is created succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Somthing is went worn',
      error,
    });
  }
};

//the function hit the bicycle service and get bicycle all data
const getAllBicycle = async (req: Request, res: Response) => {
  try {
    const result = await bicycleService.getAllBicyclefromDB();
    res.status(200).json({
      success: true,
      message: 'Bicycle are retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went worng',
      error,
    });
  }
};

// export this object for use another file
export const bicycleController = {
  createBicycle,
  getAllBicycle,
};
