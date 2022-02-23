import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';

const loginUser = async (req:Request, res: Response) => {
  const verify = await joiVerify.verifyLogin(req.body);
  // const token = await userService.createUser(verify);
  // res.status(201).json({ token });
};

export = {
  loginUser,
};