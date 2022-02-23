import UnauthorizedError from '../errors/UnauthorizedError';
import JWToken from '../helpers/JWToken';
import { IBodyJWT } from '../interfaces';
import { ILoginBody } from '../interfaces/ILogin';
import loginModel from '../models/loginModel';

const loginUser = async (body: ILoginBody) => {
  const response = await loginModel.findUser(body);
  console.log('test');
  if (!response.length) { throw new UnauthorizedError('Username or password invalid'); } 
  const { id, username } = response[0];
  const bodyObject:IBodyJWT = { username, id };
  const token = JWToken.createToken(bodyObject);
  return token;
};

export = {
  loginUser,
};