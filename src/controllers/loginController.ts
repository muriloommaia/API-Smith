import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';
import loginService from '../services/loginService';

const loginUser = async (req:Request, res: Response) => {
  const verify = await joiVerify.verifyLogin(req.body);
  const token = await loginService.loginUser(verify);
  res.status(200).json({ token });
};

export = {
  loginUser,
};