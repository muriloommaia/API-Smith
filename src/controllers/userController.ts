import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';
import userService from '../services/userService';

const createUser = async (req:Request, res: Response) => {
  const verify = await joiVerify.verifyUser(req.body);
  const token = await userService.createUser(verify);
  res.status(201).json({ token });
};

export = {
  createUser,
};