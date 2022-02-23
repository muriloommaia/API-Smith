export interface IAddUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}
export interface IResponseUser {
  id: number;
  username: string,
  classe: string,
  level: number,
  password: string,
}
export interface IBodyJWT {
  id: number,
  username: string
}
