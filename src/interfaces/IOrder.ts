export interface IOrderCreate {
  products: number[]
}

export interface IOrderResponse extends IOrderCreate{
  userId: number
}

export interface IOrderCreatePost {
  order: IOrderResponse
}