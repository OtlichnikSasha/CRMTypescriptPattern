import React, {FC} from 'react';
import TableCell from '@mui/material/TableCell';
interface PropsTypes{
    rowsValues: any[]
}

export const ItemListData: FC<PropsTypes> = ({rowsValues}) => {
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

