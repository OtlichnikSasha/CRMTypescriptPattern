export interface CategoriesType{
    data: ICategory[]
}


export interface ICategory{
    description: string
    id:  number
    name: string
    products?: []
}

export interface ICategoryEdit{
    description: string
    name: string,
    id: number
}

export interface ICategoryCreate{
    description: string
    name: string,
}