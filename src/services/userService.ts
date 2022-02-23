import JWToken from '../helpers/JWToken';
import { IAddUser, IBodyJWT } from '../interfaces';
import UserModel from '../models/UserModel';

const createUser = async (body: IAddUser) => {
  const id = await UserModel.addUser(body);
  const bodyObject:IBodyJWT = { username: body.username, id };
  const token = JWToken.createToken(bodyObject);
  return token;
};

export = {
  createUser,
};