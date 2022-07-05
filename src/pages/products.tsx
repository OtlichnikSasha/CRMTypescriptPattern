import React, {useState, FC} from "react"
import {ItemsList} from "../components/ItemsList"
import Grid from '@mui/material/Grid';
import {ItemActions} from "../components/ItemActions";


const rows = [
    {name: "Игорь", role: "Admin"},
];

export const Products: FC = () => {
    const [data, setData] = useState([]);

    const changeEntity = (entity: any) => {
        // @ts-ignore
        setData([...data, entity])
    }

    const removeEntity = (id: number) => {
        console.log("Удаляем товар")
        // Подгружаем товары
    }
    return (
        <Grid item xs={12}>
            <ItemActions data={{id:0, name: "djkas"}}/>
            <ItemsList rows={rows} onChange={changeEntity} onRemove={removeEntity}/>
        </Grid>
    );
}
