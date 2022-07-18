import React, {FC} from 'react';
import {ICategory} from "../../types/CategoryType";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

interface CategoriesListType{
    category: ICategory,
    openRemoveNotification: (entity: ICategory) => void,
    openEditModal: (entity: ICategory) => void
}

export const CategoriesList: FC<CategoriesListType> = ({category, openRemoveNotification, openEditModal}) => {
    return (
        <TableRow>
            <TableCell align="center">{category.name}</TableCell>
            <TableCell align="center">{category.description}</TableCell>
            <TableCell align="center" className="action_list">
                <EditIcon onClick={() => openEditModal(category)} />
                <DeleteIcon onClick={() => openRemoveNotification(category)}/>
            </TableCell>
        </TableRow>
    );
};

