import React, {FC} from 'react';
import {ProductType} from "../../types/ProductType";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";


interface ProductsListType{
    product: ProductType,
    openRemoveNotification: (entity: ProductType) => void,
    openEditModal: (entity: ProductType) => void
}
export const ProductsList: FC<ProductsListType> = ({product, openRemoveNotification, openEditModal}) => {
    return (
        <TableRow>
            <TableCell align="center">{product.name}</TableCell>
            <TableCell align="center">{product.price} ₽</TableCell>
            <TableCell align="center">{(100 - product.discountPrice / product.price * 100).toFixed(2)} %</TableCell>
            <TableCell align="center">{product.discountPrice} ₽</TableCell>
            <TableCell align="center">{product.availability ? "В наличии" : "Нет в наличии"}</TableCell>
            <TableCell align="center">{product.views}</TableCell>
            <TableCell align="center" className="action_list">
                <EditIcon onclick={() => openEditModal(product)} />
                <DeleteIcon onClick={() => openRemoveNotification(product)}/>
            </TableCell>
        </TableRow>
    );
};

