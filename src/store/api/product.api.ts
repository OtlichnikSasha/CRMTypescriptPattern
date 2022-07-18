import {IProduct} from "../../types/ProductType";
import {commonApi} from "../common.api";

const PRODUCTS = 'products'

export const productApi = commonApi.injectEndpoints({
    endpoints: build => ({
        getProducts: build.query<IProduct[], void>({
            query: () => ({
                url: `${PRODUCTS}`
            }),
        }),
        deleteProduct: build.mutation<string, number>({
            query: (id) => ({
                url: `${PRODUCTS}/${id}`,
                method: "DELETE"
            }),
        }),
        createProduct: build.mutation<IProduct, IProduct>({
            query: ({id, name, amount, description}) => ({
                url: `${PRODUCTS}`,
                method: "POST",
                body: {
                    id,
                    name,
                    description,
                }
            }),
        }),
        // editCategory: build.mutation<ICategory, ICategoryEdit>({
        //     query: ({id, name, description}) => ({
        //         url: `${PRODUCTS}/${id}`,
        //         method: "PUT",
        //         body: {
        //             id,
        //             name,
        //             description
        //         }
        //     }),
        // }),
    })
})

export const {useGetProductsQuery, useLazyGetProductsQuery, useDeleteProductMutation} = productApi