export interface IAddUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IBodyJWT {
  id: number,
  username: string
}