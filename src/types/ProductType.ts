import {ICategory} from "./CategoryType";

export interface IProduct{
    amount: number
    availability: boolean
    categories?: null | ICategory[]
    description: string
    discountPrice: number
    id: number
    images: null | []
    name: string
    orders: null | []
    price: number
    views: number
}


export interface IProductCreate{
    amount: number
    availability: boolean
    name: string
    price: number
    views: number
    description: string
    discountPrice: number
    categories: ICategory[]
}