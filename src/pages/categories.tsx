import React, {FC, useState} from 'react';
import Grid from "@mui/material/Grid";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Empty} from "../components/block/Empty";
import Table from "@mui/material/Table";
import Snackbar from "@mui/material/Snackbar";
import {CategoriesList} from "../components/category/CategoriesList";
import {AddModalWindow} from "../components/category/AddModalWindow";
import {DeleteNotification} from "../components/deleteNotification/DeleteNotification";
import {TopActions} from "../components/topActions/TopActions";
import {Loader} from "../components/loader/Loader";
import {EditModalWindow} from "../components/category/EditModalWindow";
import {ICategory} from "../types/CategoryType";
import {useGetCategoriesQuery, useLazyGetCategoriesQuery, useRemoveCategoryMutation} from "../store/api/category.api";

export const Categories: FC = () => {
    const [deleteNotification, setDeleteNotification] = useState<boolean>(false)
    const [deleteHeading, setDeleteHeading] = useState<string>('')
    const [deleteMessage, setDeleteMessage] = useState<string>('')
    const [deleteId, setDeleteId] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editModal, setEditModal] = useState<boolean>(false);
    const [category, setCategory] = useState<ICategory>({
        name: '',
        description: '',
        id: 0
    });
    const [openNotification, setOpenNotification] = useState<boolean>(false)
    const [messageNotification, setMessageNotification] = useState<string>("")
    const {isLoading, isError, data} = useGetCategoriesQuery()
    const [fetchCategories] = useLazyGetCategoriesQuery()
    const [fetchRemoveCategory] = useRemoveCategoryMutation()


    const openEditModal = (entity: ICategory) => {
        setEditModal(true)
        setCategory(entity)
    }
    // Открываем модальное окно с удаление
    const openRemoveNotification = (entity: ICategory) => {
        setDeleteId(entity.id)
        setDeleteNotification(true)
        setDeleteHeading(`Вы действительно хотите удалить категорию <b>${entity.name}</b>?`)
        setDeleteMessage(`Вместе с категорией удалится ${entity?.products?.length} товаров`)
    }

    // Удаляем сущность
    const removeEntity = async () => {
        await fetchRemoveCategory(deleteId)
        setOpenNotification(true)
        setMessageNotification("Категория успешно удалена!")
        setDeleteNotification(false)
        return reloadData()
    }

    const startSearch = async () => {
        // if (search) {
        //     try {
        //         const data: AxiosResponse<ICategory[]> = await http.get(`/categories?q=${search}`)
        //         console.log('data', data)
        //     } catch (e) {
        //     }
        // }
    }

    const reloadData = () => fetchCategories()
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
            <EditModalWindow setOpen={setEditModal} open={editModal} entity={category}/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Название</TableCell>
                        <TableCell align="center">Описание</TableCell>
                        <TableCell align="center">Действия</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {isLoading ?
                        <Loader />
                        :
                        <></>
                    }
                    {!isLoading ? data?.map(row => {
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
                    {!data?.length && !isLoading ? <Empty/> : <></>}

                </TableBody>
            </Table>
            <DeleteNotification heading={deleteHeading} text={deleteMessage}
                                open={deleteNotification} setOpen={setDeleteNotification} removeEntity={removeEntity}/>
            {/*Notification*/}
            <Snackbar
                anchorOrigin={{vertical : "bottom", horizontal : "right"}}
                open={openNotification}
                onClose={() => setOpenNotification(false)}
                message={messageNotification}
                key={"bottom" + "right"}
                autoHideDuration={2500}
            />
        </Grid>
    );
};

