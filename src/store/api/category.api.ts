import {ICategory, ICategoryEdit} from "../../types/CategoryType";
import {commonApi} from "../common.api";

export const categoryApi = commonApi.injectEndpoints({
    endpoints: build => ({
        getCategories: build.query<ICategory[], void>({
            query: () => ({
                url: `categories`
            }),
        }),
        removeCategory: build.mutation<string, number>({
            query: (id) => ({
                url: `categories/${id}`,
                method: "DELETE"
            }),
        }),
        editCategory: build.mutation<ICategory, ICategoryEdit>({
            query: ({id, name, description}) => ({
                url: `categories/${id}`,
                method: "PUT",
                body: {
                    id,
                    name,
                    description
                }
            }),
        }),

    })
})

export const {useGetCategoriesQuery, useLazyGetCategoriesQuery, useRemoveCategoryMutation} = categoryApi