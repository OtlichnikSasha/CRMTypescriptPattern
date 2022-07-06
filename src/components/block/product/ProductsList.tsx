import React, {FC} from 'react';
import {ProductType} from "../../../types/ProductType";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import {CategoryType} from "../../../types/CategoryType";
import {AxiosResponse} from "axios";


interface ProductsListType{
    product: ProductType,
    removeEntity: Promise<AxiosResponse>
}
export const ProductsList: FC<ProductsListType> = ({product, removeEntity}) => {
    const removeProduct = async (id: number) => {
        // @ts-ignore
        await removeEntity(id)
    }
    return (
        <TableRow>
            <TableCell align="center"><input type="checkbox"/></TableCell>
            <TableCell align="center">{product.name}</TableCell>
            <TableCell align="center">{product.price}</TableCell>
            <TableCell align="center">{100 - product.discountPrice / product.price * 100}</TableCell>
            <TableCell align="center">{product.discountPrice}</TableCell>
            <TableCell align="center">{product.availability ? "В наличие" : "Нет в наличии"}</TableCell>
            <TableCell align="center">{product.views}</TableCell>
            <TableCell align="center" className="deleteIcon" onClick={() => removeProduct(product.id)}><DeleteIcon/></TableCell>
        </TableRow>
    );
};

