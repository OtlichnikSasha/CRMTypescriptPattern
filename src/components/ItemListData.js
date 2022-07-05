import React, {FC} from 'react';
import TableCell from '@mui/material/TableCell';


export const ItemListData = ({rowsValues}) => {
    console.log(rowsValues)
    return (
        <>
            {
                rowsValues.map((data, i) => {
                    return(
                        <>
                            {i !== 0 ? <TableCell align="center" key={`data-${i}`}>{data}</TableCell> : <></>}
                        </>

                    )
                })
            }
        </>
    );
};

