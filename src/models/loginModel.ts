import { IResponseUser } from '../interfaces';
import { ILoginBody } from '../interfaces/ILogin';
import db from './knex';

const findUser = async (user: ILoginBody):Promise<IResponseUser[]> => {
  const response = await db('Users').select('*').where(user);
  return response;
};

export = {
  findUser,
};