import React, {FC} from 'react';
import {CategoryEditType, CategoryType} from "../../types/CategoryType";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

interface CategoriesListType{
    category: CategoryEditType,
    openRemoveNotification: (entity: CategoryType) => void,
    openEditModal: (entity: CategoryEditType) => void
}

export const CategoriesList: FC<CategoriesListType> = ({category, openRemoveNotification, openEditModal}) => {
    return (
        <TableRow>
            <TableCell align="center">{category.name}</TableCell>
            <TableCell align="center">{category.description}</TableCell>
            <TableCell align="center" className="action_list">
                <EditIcon onclick={() => openEditModal(category)} />
                <DeleteIcon onClick={() => openRemoveNotification(category)}/>
            </TableCell>
        </TableRow>
    );
};

