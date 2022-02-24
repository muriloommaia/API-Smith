export interface IOrderCreate {
  products: number[]
}

export interface IOrderResponse extends IOrderCreate{
  userId: number
}

export interface IOrderCreatePost {
  order: IOrderResponse
}

export interface IOrderByJoin {
  orderId: number,
  userId: number,
  id: number,
}

export interface IOrderById {
  id: number,
  userId: number,
  products: number[]
}