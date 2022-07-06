import React, {useState, FC, useEffect} from "react"
import {ItemsList} from "../components/ItemsList"
import Grid from '@mui/material/Grid';
import {ItemActions} from "../components/ItemActions";
import Button from "@mui/material/Button";
import {AddModalWindow} from "../components/block/product/AddModalWindow";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {EditModalWindow} from "../components/block/user/EditModalWindow";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {AxiosResponse} from "axios";
import {http} from "../http";
import {ProductType} from "../types/ProductType";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {ProductsList} from "../components/block/product/ProductsList";
import {Empty} from "../components/block/Empty";
import Table from "@mui/material/Table";


export const Products: FC = () => {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);



    const changeEntity = (entity: any) => {
        // @ts-ignore
        setData([...data, entity])
    }


    const [action, setAction] = useState(0);
    const handleChange = (event:any) => {
        if (event.target.value) setOpenEditModal(true)
    };


    const changeAction = () => {
    }

    const openEditModalWindow = () => {
        setOpenEditModal(true)
    }

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        const response: AxiosResponse = await http.get("/products")
        console.log('response', response)
        const products: ProductType[] = response.data
        setData([data, ...products])
    }

    const removeEntity = async (id: number) => {
        console.log("Удаляем товар")
        // Подгружаем товары
        const status: AxiosResponse<any> = await http.delete(`/products/${id}`)
        console.log('status', status)
        return await getProducts()
    }

    const handleOpen = () => setOpenModal(true);
    return (
        <Grid item xs={12}>
            <section className="top_container">
                <div className="top_container__btns">
                    <Button variant="contained" onClick={handleOpen}>
                        + Добавить товар
                    </Button>
                    <AddModalWindow setOpen={setOpenModal} open={openModal}/>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Действия</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={action}
                            label="Действия"
                            onChange={handleChange}
                        >
                            <MenuItem value={1} onClick={openEditModalWindow}>Редактировать</MenuItem>
                            <MenuItem value={2}>Удалить</MenuItem>
                        </Select>
                    </FormControl>
                    <EditModalWindow open={openEditModal} setOpen={setOpenEditModal} user={data}/>
                </div>
                <div className="search_users_btn">
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder="Поиск по таблице"
                        inputProps={{'aria-label': 'search google maps'}}
                    />
                    <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </div>
            </section>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><input type="checkbox"/></TableCell>
                        <TableCell align="center">Название</TableCell>
                        <TableCell align="center">Цена</TableCell>
                        <TableCell align="center">Размер скидки</TableCell>
                        <TableCell align="center">Скидочная цена</TableCell>
                        <TableCell align="center">Наличие</TableCell>
                        <TableCell align="center">Кол-во просмотров</TableCell>
                        <TableCell align="center">Удалить</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.length ? data.map(row => {
                            return (
                                <ProductsList key={row.id} product={row} removeEntity={removeEntity}/>
                            )
                        })
                        :
                        <Empty/>
                    }
                </TableBody>
            </Table>

        </Grid>
    );
}
