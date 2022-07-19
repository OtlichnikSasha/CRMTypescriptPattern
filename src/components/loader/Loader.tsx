import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Skeleton from "@mui/material/Skeleton";

export const Loader = () => {
    return (
        <>
            <TableRow>
                <TableCell ><Skeleton variant="text"/></TableCell>
                <TableCell><Skeleton variant="text"/></TableCell>
                <TableCell><Skeleton variant="text"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell ><Skeleton variant="text"/></TableCell>
                <TableCell><Skeleton variant="text"/></TableCell>
                <TableCell><Skeleton variant="text"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Skeleton variant="text"/></TableCell>
                <TableCell><Skeleton variant="text"/></TableCell>
                <TableCell><Skeleton variant="text"/></TableCell>
            </TableRow>
        </>
    );
};