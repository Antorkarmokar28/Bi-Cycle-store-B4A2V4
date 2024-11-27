import { Request, Response } from 'express';
import { bicycleService } from './bicycle.service';

// will handling request and response manage
const createBicycle = async (req: Request, res: Response) => {
  try {
    // receive data in payload from client
    const payload = req.body;
    const result = await bicycleService.createBicycleIntoBD(payload);
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
// export this object for use another file
export const bicycleController = {
  createBicycle,
};
