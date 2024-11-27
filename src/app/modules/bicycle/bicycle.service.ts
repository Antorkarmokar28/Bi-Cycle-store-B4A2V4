import { IBicycle } from './bicycle.interface';
import { Bicycle } from './bicycle.model';
// create an bicycle data in the mongodb database
const createBicycleIntoBD = async (bicycle: IBicycle) => {
  const result = await Bicycle.create(bicycle);
  return result;
};
// export this object for use another file
export const bicycleService = {
  createBicycleIntoBD,
};
