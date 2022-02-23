import { IAddUser } from '../interfaces';
import db from './knex';

const addUser = async (user: IAddUser):Promise<number> => {
  const [id] = await db('Users').insert(user);
  return id;
};

export = {
  addUser,
};