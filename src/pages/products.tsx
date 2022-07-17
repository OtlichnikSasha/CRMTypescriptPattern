import React, {useState, FC, useEffect} from "react"
import Grid from '@mui/material/Grid';
import {AddModalWindow} from "../components/product/AddModalWindow";
import {EditModalWindow} from "../components/product/EditModalWindow";
import {AxiosResponse} from "axios";
import {http} from "../http";
import {ProductType} from "../types/ProductType";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {ProductsList} from "../components/product/ProductsList";
import {Empty} from "../components/block/Empty";
import Table from "@mui/material/Table";
import {TopActions} from "../components/topActions/TopActions";
import {Loader} from "../components/loader/Loader";
import {DeleteNotification} from "../components/deleteNotification/DeleteNotification";


export const Products: FC = () => {
    const [data, setData] = useState<ProductType[]>([]);
    const [deleteNotification, setDeleteNotification] = useState<boolean>(false)
    const [deleteHeading, setDeleteHeading] = useState<string>('')
    const [deleteMessage, setDeleteMessage] = useState<string>('')
    const [deleteId, setDeleteId] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editModal, setEditModal] = useState<boolean>(false);
    const [product, setProduct] = useState<ProductType>({
        amount: 0,
        availability: false,
        categories: undefined,
        description: "",
        discountPrice: 0,
        id: 0,
        images: null,
        name: "",
        orders: null,
        price: 0,
        views: 0
    });
    const [loading, setLoading] = useState<boolean>(false);

    const openEditModal = (entity: ProductType) => {
        setEditModal(true)
        setProduct(entity)
    }


    // Открываем модальное окно с удаление
    const openRemoveNotification = (entity: ProductType) => {
        setDeleteId(entity.id)
        setDeleteNotification(true)
        setDeleteHeading(`Вы действительно хотите удалить товар <b>${entity.name}</b>?`)
        setDeleteMessage(`Вместе с ним удалятся ${entity?.images?.length} фотографий`)
    }

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        setLoading(true)
        const response: AxiosResponse<ProductType[]> = await http.get("/products")
        const products = response.data
        setData([...data, ...products])
        setLoading(false)
    }

    // Удаляем сущность
    const removeEntity = async () => {
        try {
            const status: AxiosResponse<any> = await http.delete(`/products/${deleteId}`)
            console.log('status', status)
            return await getProducts()
        } catch (e) {

        }
    }

    const startSearch = async () => {
        if (search) {
            const response: AxiosResponse<ProductType[]> = await http.get(`/products?q=${search}`)
            console.log('data', response)
        }
    }

    const reloadData = async () => {
        setData([])
        await getProducts()
    }

    const handleOpen = () => setOpenModal(true);
    return (
        <Grid item xs={12}>
            <TopActions
                btnText="Добавить товар"
                search={search}
                setSearch={setSearch}
                startSearch={startSearch}
                handleOpen={handleOpen}
                reloadData={reloadData}
            />
            <AddModalWindow setOpen={setOpenModal} open={openModal}/>
            <EditModalWindow setOpen={setEditModal} open={editModal}/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Название</TableCell>
                        <TableCell align="center">Цена</TableCell>
                        <TableCell align="center">Скидка в %</TableCell>
                        <TableCell align="center">Скидочная цена</TableCell>
                        <TableCell align="center">Наличие</TableCell>
                        <TableCell align="center">Кол-во просмотров</TableCell>
                        <TableCell align="center">Действия</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {loading ?
                        <Loader/>
                        :
                        <></>
                    }
                    {data.length && !loading ? data.map(row => {
                            return (
                                <ProductsList key={row.id} product={row}
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
}
