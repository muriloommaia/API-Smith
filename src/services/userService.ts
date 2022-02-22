import JWToken from '../helpers/JWToken';
import { IAddUser, IBodyJWT } from '../interfaces';
import db from '../models/knex';

const createUser = async (body: IAddUser) => {
  const [id] = await db('Users').insert(body);
  const bodyObject:IBodyJWT = { username: body.username, id };
  const token = JWToken.createToken(bodyObject);
  return token;
};

export = {
  createUser,
};