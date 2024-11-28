import { IBicycle } from './bicycle.interface';
import { Bicycle } from './bicycle.model';
// create an bicycle data in the mongodb database
const createBicycleIntoDB = async (bicycle: IBicycle) => {
  const result = await Bicycle.create(bicycle);
  return result;
};
// get all bicycle data from mongodb database
const getAllBicyclefromDB = async () => {
  const result = await Bicycle.find();
  return result;
};

// export this object for use another file
export const bicycleService = {
  createBicycleIntoDB,
  getAllBicyclefromDB,
};
