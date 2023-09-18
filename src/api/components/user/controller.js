import { catchAsync } from '../../utils/catchAsync.js';
import ExpressError from '../../utils/expressError.js';
import User from './model.js';

export const createUser = catchAsync(async (req, res) => {
  const { fullName, age, city } = req.body;
  const user = await User.create({ fullName, age, city });
  if (user.err) throw new ExpressError(user.err, user.statusCode);
  res.status(200).send({
    status: 'success',
    data: user,
  });
});

export const getUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) throw new ExpressError('User does not exist!', 404);
  res.status(200).send({
    status: 'success',
    data: user,
  });
});

export const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  // Check user exists
  const checkUser = await User.findById(id);
  if (!checkUser) throw new ExpressError('User does not exist!', 404);
  // update user
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send({
    status: 'success',
    data: user,
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new ExpressError('User does not exist!', 404);
  res.status(200).send({
    status: 'success',
    data: user,
  });
});
