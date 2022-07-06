import {CategoryType} from "./CategoryType";

export interface ProductType{
    amount: number
    availability: boolean
    categories?: null | CategoryType[]
    description: string
    discountPrice: number
    id: number
    images: null | []
    name: string
    orders: null | []
    price: number
    views: number
}


export interface CreateProductType{
    amount: number
    availability: boolean
    name: string
    price: number
    views: number
    description: string
    discountPrice: number
    categories: CategoryType[]
}