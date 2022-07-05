import React, {useEffect, useState} from 'react'
import {ItemsList} from "../components/ItemsList"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {ItemActions} from "../components/ItemActions";
import Pagination from '@mui/material/Pagination';
import Snackbar from '@mui/material/Snackbar';

import {api} from "../http/api";

import {useParams, useNavigate} from "react-router-dom"
import {Loader} from "../components/block/Loader";

export const Staffs = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [openNotification, setOpenNotification] = useState(true)
    const [messageNotification, setMessageNotification] = useState("Hello World")
    const vertical = "bottom"
    const horizontal = "right"
    const params = useParams()
    const navigate = useNavigate()
    const page = Number(params.page) || 1
    console.log('page', page)

    useEffect(() => {
        document.title = "Сотрудники"
        getStaffs()
    }, [page])


    const getStaffs = async () => {
        setLoading(true)
        try{
            const data = await api.get("/staffs", {page})
        }
        catch (e){

        }finally {
            setLoading(false)
        }
    }


    const changePage = (event, value) => {
        navigate(`/staffs/${value}`)
    };

    const changeEntity = entity => {
        setData(entity)
    }

    const removeEntity = id => {
    }

    const users = [
        {id: 1, name: "Пётр", surname: 'Петров', email: "petr-petrov@mail.ru"}
    ]

    if(loading) return <Loader/>

    return (
        <Grid item xs={12}>

            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openNotification}
                onClose={() => setOpenNotification(false)}
                message={messageNotification}
                key={vertical + horizontal}
            />
            <ItemActions data={data}/>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <ItemsList rows={users} onRemove={removeEntity} onChange={changeEntity}/>
                </Paper>
                <Pagination count={10} size="large" page={page} onChange={changePage}/>
            </Grid>
        </Grid>
    );
}

