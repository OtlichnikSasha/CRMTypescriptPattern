import React, {FC, useState, useEffect, useRef, useCallback, ChangeEvent} from 'react';
import Grid from "@mui/material/Grid";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Empty} from "../components/block/Empty";
import Table from "@mui/material/Table";
import {CategoriesList} from "../components/category/CategoriesList";
import {http} from "../http/index"
import {AxiosResponse} from "axios"
import {CategoryEditType, CategoryType} from "../types/CategoryType";
import {AddModalWindow} from "../components/category/AddModalWindow";
import {DeleteNotification} from "../components/deleteNotification/DeleteNotification";
import {TopActions} from "../components/topActions/TopActions";
import {Loader} from "../components/loader/Loader";
import {EditModalWindow} from "../components/category/EditModalWindow";

export const Categories: FC = () => {
    const [data, setData] = useState<CategoryType[]>([]);
    const [deleteNotification, setDeleteNotification] = useState<boolean>(false)
    const [deleteHeading, setDeleteHeading] = useState<string>('')
    const [deleteMessage, setDeleteMessage] = useState<string>('')
    const [deleteId, setDeleteId] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editModal, setEditModal] = useState<boolean>(false);
    const [category, setCategory] = useState<CategoryType>({
        name: '',
        description: '',
        id: 0
    });
    const [loading, setLoading] = useState<boolean>(false);


    const changeEntity = (entity: CategoryType) => {
    }

    const getCategories = useCallback(async () => {
        setLoading(true)
        const response: AxiosResponse<CategoryType[]> = await http.get("/categories")
        setData([...data, ...response.data])
        document.title = "Категории"
        setLoading(false)
    }, [])

    useEffect(() => {
        getCategories()
    }, [getCategories])


    const openEditModal = (entity: CategoryType) => {
        setEditModal(true)
        setCategory(entity)
    }


    // Открываем модальное окно с удаление
    const openRemoveNotification = (entity: CategoryType) => {
        setDeleteId(entity.id)
        setDeleteNotification(true)
        setDeleteHeading(`Вы действительно хотите удалить категорию <b>${entity.name}</b>?`)
        setDeleteMessage(`Вместе с категорией удалится ${entity?.products?.length} товаров`)
    }

    // Удаляем сущность
    const removeEntity = async () => {
        try {
            const data: AxiosResponse = await http.delete(`/categories/${deleteId}`)
            console.log('data', data)
            return getCategories()
        } catch (e) {

        }
    }

    const startSearch = async () => {
        if (search) {
            try {
                const data: AxiosResponse<CategoryType[]> = await http.get(`/categories?q=${search}`)
                console.log('data', data)
            } catch (e) {
            }
        }
    }

    const reloadData = async () => {
        await getCategories()
    }

    const handleOpen = () => setOpenModal(true);
    return (
        <Grid item xs={12}>
            <TopActions
                btnText="Добавить категорию"
                search={search}
                setSearch={setSearch}
                startSearch={startSearch}
                handleOpen={handleOpen}
                reloadData={reloadData}
            />
            <AddModalWindow setOpen={setOpenModal} open={openModal}/>
            <EditModalWindow setOpen={setEditModal} open={editModal} category={category}/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Название</TableCell>
                        <TableCell align="center">Описание</TableCell>
                        <TableCell align="center">Действия</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {loading ?
                        <Loader />
                        :
                        <></>
                    }
                    {data.length && !loading ? data.map(row => {
                            return (
                                <CategoriesList key={row.id} category={row}
                                                openRemoveNotification={openRemoveNotification}
                                                openEditModal={openEditModal}
                                />
                            )
                        })
                        :
                        <></>
                    }
                    {!data.length && !loading ? <Empty/> : <></>}

                </TableBody>
            </Table>
            <DeleteNotification heading={deleteHeading} text={deleteMessage}
                                open={deleteNotification} setOpen={setDeleteNotification} removeEntity={removeEntity}/>
        </Grid>
    );
};

