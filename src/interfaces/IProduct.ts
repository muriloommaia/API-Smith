export interface IAddProduct{
  name: string,
  amount: string
}

export interface IReturnAddProduct {
  item: ISingleProduct
}

export interface ISingleProduct {
  id: number,
  name: string,
  amount: string,
  orderId?: number
}