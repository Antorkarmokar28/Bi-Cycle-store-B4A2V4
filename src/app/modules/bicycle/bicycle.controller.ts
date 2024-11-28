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

//the function hit the bicycle service and get a bicycle single data
const getsingleBicycle = async (req: Request, res: Response) => {
  try {
    // get id from bicycle route
    const { _id } = req.params;
    // this function hit the bicycle service and get a single bicycle data
    const result = await bicycleService.getSingleBicycleFromDB(_id);
    res.status(200).json({
      success: true,
      message: 'Bicycle is retrieved successfully',
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
// This function manage request and response for update data into mongodb database
const updateBicyclelData = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const data = req.body;
    const result = await bicycleService.getUpdateBicycleData(_id, data);
    res.status(200).json({
      success: true,
      message: 'Bicycle data is update successfully',
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
// This function manage request and response for delete data from mongodb database
const deleteBicycleData = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await bicycleService.getDeleteBicycleData(_id);
    res.status(200).json({
      success: true,
      message: 'Bicycle data deleted is successfully',
      data: {},
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
  getsingleBicycle,
  updateBicyclelData,
  deleteBicycleData,
};
