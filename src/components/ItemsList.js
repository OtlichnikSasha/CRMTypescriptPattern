import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import {ItemListData} from "./ItemListData";
import {Empty} from "./block/Empty";

export const ItemsList = ({rows, onRemove, onChange}) => {
    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#F8F9FA",
            color: "#212529",
            fontWeight: 700
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const editData = data => onChange(data)
    const removeData = id => onRemove(id)

    const rowsHeading = rows.length ? Object.keys(rows[0]) : []

    return (
        <Table size="small">
            {rowsHeading.length ?
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><input type="checkbox"/></TableCell>
                        {rowsHeading.map(heading => {
                            return (
                                <>
                                    {
                                        heading !== "id" ?
                                            <TableCell key={`heading=${heading}`}
                                                       align="center">{heading}</TableCell> : <></>
                                    }

                                </>
                            )
                        })}
                        <TableCell align="center">Удалить</TableCell>
                    </TableRow>
                </TableHead>
                :
                <></>
            }
            <TableBody>
                {rows.length ? rows.map(row => {
                        const rowsValues = Object.values(row)
                        return (
                            <TableRow key={row.name}>
                                <TableCell align="center"><input type="checkbox"
                                                                 onChange={() => editData(row)}/></TableCell>
                                <ItemListData rowsValues={rowsValues}/>
                                <TableCell align="center" className="deleteIcon"
                                           onClick={() => removeData(row.id)}><DeleteIcon/></TableCell>
                            </TableRow>
                        )
                    })
                    :
                    <Empty/>
                }
            </TableBody>
        </Table>


        // <TableContainer component={Paper}>
        //     <Table sx={{minWidth: 700}} aria-label="customized table">
        //         <TableHead>
        //             <TableRow>
        //                 <StyledTableCell align="center"><input type="checkbox"/></StyledTableCell>
        //                 {rowsHeading.map(heading => {
        //                     return (
        //                         <StyledTableCell key={`heading=${heading}`}
        //                                          align="center">{heading}</StyledTableCell>
        //                     )
        //                 })}
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {rows.map((row, i) => {
        //                 const rowsValues = Object.values(row)
        //                 return (
        //                     <StyledTableRow key={row.name}>
        //                         <StyledTableCell align="center"><input type="checkbox" onChange={() => editUser(row)} /></StyledTableCell>
        //                         <StyledTableCell align="center">{rowsValues[i]}</StyledTableCell>
        //                         <StyledTableCell align="center">{rowsValues[i]}</StyledTableCell>
        //                         <StyledTableCell align="center">{rowsValues[i]}</StyledTableCell>
        //                         <StyledTableCell align="center">{rowsValues[i]}</StyledTableCell>
        //                         <StyledTableCell align="center">{rowsValues[i]}</StyledTableCell>
        //                         <StyledTableCell align="center" className="deleteIcon" onClick={() => removeUser(row.name)}><DeleteIcon/></StyledTableCell>
        //                     </StyledTableRow>
        //                 )
        //             })}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    );
};

