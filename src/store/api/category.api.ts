import {ICategory, ICategoryCreate, ICategoryEdit} from "../../types/CategoryType";
import {commonApi} from "../common.api";

const CATEGORIES = 'categories'
export const categoryApi = commonApi.injectEndpoints({
    endpoints: build => ({
        getCategories: build.query<ICategory[], void>({
            query: () => ({
                url: `${CATEGORIES}`
            }),
        }),
        removeCategory: build.mutation<string, number>({
            query: (id) => ({
                url: `${CATEGORIES}/${id}`,
                method: "DELETE"
            }),
        }),
        editCategory: build.mutation<ICategory, ICategoryEdit>({
            query: ({id, name, description}) => ({
                url: `${CATEGORIES}/${id}`,
                method: "PUT",
                body: {
                    id,
                    name,
                    description
                }
            }),
        }),
        createCategory: build.mutation<ICategory, ICategoryCreate>({
            query: ({name, description}) => ({
                url: `${CATEGORIES}`,
                method: "POST",
                body: {
                    name,
                    description
                }
            }),
        }),

    })
})

export const {
    useGetCategoriesQuery,
    useLazyGetCategoriesQuery,
    useRemoveCategoryMutation,
    useCreateCategoryMutation,
    useEditCategoryMutation
} = categoryApi