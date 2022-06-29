import {ItemsList} from "../components/ItemsList"
import Grid from '@mui/material/Grid';
import {ItemActions} from "../components/ItemActions";
import React from "react"

function createData(name, surname, email, role, status) {
    return {name, surname, email, role, status};
}

const rows = [
    createData("Игорь", "Игоревич", "djskadjsaldjskadjka@mail.ru", "Продавец", "Активен"),
    createData("Игорь", "Игоревич", "djskadjsaldjskadjka@mail.ru", "Продавец", "Активен"),
    createData("Игорь", "Игоревич", "djskadjsaldjskadjka@mail.ru", "Продавец", "Активен"),
    createData("Игорь", "Игоревич", "djskadjsaldjskadjka@mail.ru", "Продавец", "Активен"),
    createData("Игорь", "Игоревич", "djskadjsaldjskadjka@mail.ru", "Продавец", "Активен"),
];

export const Products = () => {
    const [data, setData] = React.useState([]);

    const changeEntity = entity => {
        setData([...data, entity])
    }

    const removeEntity = id => {
        console.log("Удаляем товар")
        // Подгружаем товары
    }
    return (
        <>
            <Grid item xs={12}>
                <ItemActions/>
                <ItemsList rows={rows} onChange={changeEntity} onRemove={removeEntity} />
            </Grid>

        </>
    );
}
