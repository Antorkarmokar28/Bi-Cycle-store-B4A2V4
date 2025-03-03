import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';

const registrastionUser = catchAsynch(async (req, res) => {
  const payload = req.body.data;

  const result = await UserService.registrationUserIntoDB(req.file, payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserController = {
  registrastionUser,
};
