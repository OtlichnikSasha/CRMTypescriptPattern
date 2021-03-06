import React, {FC, useState, } from "react"
import Grid from '@mui/material/Grid';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Snackbar from "@mui/material/Snackbar";

import {IProduct} from "../types/ProductType";
import {AddModalWindow} from "../components/product/AddModalWindow";
import {EditModalWindow} from "../components/product/EditModalWindow";
import {ProductsList} from "../components/product/ProductsList";
import {Empty} from "../components/block/Empty";
import {TopActions} from "../components/topActions/TopActions";
import {Loader} from "../components/loader/Loader";
import {DeleteNotification} from "../components/deleteNotification/DeleteNotification";
import {useGetProductsQuery, useLazyGetProductsQuery, useDeleteProductMutation} from "../store/api/product.api";


export const Products: FC = () => {
    const [deleteNotification, setDeleteNotification] = useState<boolean>(false)
    const [deleteHeading, setDeleteHeading] = useState<string>('')
    const [deleteMessage, setDeleteMessage] = useState<string>('')
    const [deleteId, setDeleteId] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editModal, setEditModal] = useState<boolean>(false);
    const [product, setProduct] = useState<IProduct>({
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
    const [openNotification, setOpenNotification] = useState<boolean>(false)
    const [messageNotification, setMessageNotification] = useState<string>("")
    const {data, isLoading} = useGetProductsQuery()
    const [fetchProducts] = useLazyGetProductsQuery()
    const [fetchRemoveProduct] = useDeleteProductMutation()

    const openEditModal = (entity: IProduct) => {
        setEditModal(true)
        setProduct(entity)
    }

    // ?????????????????? ?????????????????? ???????? ?? ????????????????
    const openRemoveNotification = (entity: IProduct) => {
        setDeleteId(entity.id)
        setDeleteNotification(true)
        setDeleteHeading(`???? ?????????????????????????? ???????????? ?????????????? ?????????? <b>${entity.name}</b>?`)
        setDeleteMessage(`???????????? ?? ?????? ???????????????? ${entity?.images?.length} ????????????????????`)
    }

    // ?????????????? ????????????????
    const removeEntity = async () => {
        await fetchRemoveProduct(deleteId)
        setDeleteNotification(false)
        setMessageNotification("?????????? ?????????????? ????????????!")
        setOpenNotification(true)
        return reloadData()
    }

    const startSearch = async () => {
        // if (search) {
        //     const response: AxiosResponse<IProduct[]> = await http.get(`/products?q=${search}`)
        //     console.log('data', response)
        // }
    }

    const reloadData = () => fetchProducts()
    const handleOpen = () => setOpenModal(true);
    return (
        <Grid item xs={12}>
            <TopActions
                btnText="???????????????? ??????????"
                search={search}
                setSearch={setSearch}
                startSearch={startSearch}
                handleOpen={handleOpen}
                reloadData={reloadData}
            />
            <AddModalWindow setOpen={setOpenModal} open={openModal}/>
            <EditModalWindow setOpen={setEditModal} open={editModal} entity={product}/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">????????????????</TableCell>
                        <TableCell align="center">????????</TableCell>
                        <TableCell align="center">???????????? ?? %</TableCell>
                        <TableCell align="center">?????????????????? ????????</TableCell>
                        <TableCell align="center">??????????????</TableCell>
                        <TableCell align="center">??????-???? ????????????????????</TableCell>
                        <TableCell align="center">????????????????</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {isLoading ?
                        <Loader/>
                        :
                        <></>
                    }
                    {!isLoading ? data?.map(row => {
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
                    {!data?.length && !isLoading ? <Empty/> : <></>}

                </TableBody>
            </Table>
            <DeleteNotification heading={deleteHeading}
                                text={deleteMessage}
                                open={deleteNotification}
                                setOpen={setDeleteNotification}
                                removeEntity={removeEntity}
            />
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
}
