import React, {FC, useState, useEffect, useRef} from 'react';
import Grid from "@mui/material/Grid";
import {http} from "../http/index"
import {AxiosResponse} from "axios"
import {CategoryType} from "../types/CategoryType";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Empty} from "../components/block/Empty";
import Table from "@mui/material/Table";
import {CategoriesList} from "../components/block/category/CategoriesList";
import Button from "@mui/material/Button";
import {AddModalWindow} from "../components/block/category/AddModalWindow";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {EditModalWindow} from "../components/block/user/EditModalWindow";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


export const Categories: FC = () => {
    const [data, setData] = useState<CategoryType[]>([]);

    const changeEntity = (entity: any) => {
        // @ts-ignore
        setData([...data, entity])
    }

    useEffect(() => {
        getCategories()
    }, [])


    const getCategories = async () => {
        const response: AxiosResponse = await http.get("/categories")
        console.log('response', response)
        const categories: CategoryType[] = response.data
        setData([...data, ...categories])
    }

    const removeEntity = async (id: number) => {
        try{
            console.log("Удаляем категорию")
            // Подгружаем категории
            const status: AxiosResponse<any> = await http.delete(`/categories/${id}`)
            console.log('status', status)
            return getCategories()
        }
        catch(e){
            console.log('e', e)
        }

    }

    const [open, setOpen] = useState<boolean>(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [action, setAction] = useState(0);
    const actionRef = useRef(null)
    const handleChange = (event:any) => {
        if (event.target.value) setOpenEditModal(true)
    };
    const handleClick = () => {
    };

    const handleMenuItemClick = (event: any, index: number) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    // const handleClose = (event: any) => {
    //     if (anchorRef && anchorRef.current && anchorRef.current?.contains(event.target)) {
    //         return;
    //     }
    //     setOpen(false);
    // };

    const changeAction = () => {
        console.log(actionRef)
    }

    const openEditModalWindow = () => {
        setOpenEditModal(true)
    }

    const handleOpen = () => setOpenModal(true);
    return (
        <Grid item xs={12}>
            <section className="top_container">
                <div className="top_container__btns">
                    <Button variant="contained" onClick={handleOpen}>
                        + Добавить категорию
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
                        <TableCell align="center">Описание</TableCell>
                        <TableCell align="center">Удалить</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.length ? data.map(row => {
                            return (
                                <CategoriesList key={row.id} category={row} removeEntity={removeEntity}/>
                            )
                        })
                        :
                        <Empty/>
                    }
                </TableBody>
            </Table>
        </Grid>
    );
};

