export interface CategoriesType{
    data: CategoryType[]
}


export interface CategoryType{
    description: string
    id:  number
    name: string
    products?: []
}

export interface CategoryEditType{
    description: string
    name: string
}