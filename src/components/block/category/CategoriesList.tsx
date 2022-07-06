import React, {FC} from 'react';
import {CategoryType} from "../../../types/CategoryType";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import {AxiosResponse} from "axios";

interface CategoriesListType{
    category: CategoryType,
    removeEntity: Promise<AxiosResponse>
}

export const CategoriesList: FC<CategoriesListType> = ({category, removeEntity}) => {
    const removeCategory = async (id: number) => {
        // @ts-ignore
        await removeEntity(id)
    }
    return (
        <TableRow>
            <TableCell align="center"><input type="checkbox"/></TableCell>
            <TableCell align="center">{category.name}</TableCell>
            <TableCell align="center">{category.description}</TableCell>
            <TableCell align="center" className="deleteIcon" onClick={() => removeCategory(category.id)}><DeleteIcon/></TableCell>
        </TableRow>
    );
};

