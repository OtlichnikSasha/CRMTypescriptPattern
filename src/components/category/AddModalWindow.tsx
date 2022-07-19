import React, {FC, useState, useEffect, useCallback} from 'react';
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import {IModalWindowCreate} from "../../types/ModalWindowType";
import {ICategoryCreate} from "../../types/CategoryType";
import {useLazyGetCategoriesQuery, useCreateCategoryMutation} from "../../store/api/category.api";

export const AddModalWindow: FC<IModalWindowCreate> = ({open, setOpen}) => {
    const [form, setForm] = useState<ICategoryCreate>({
        name: '',
        description: ''
    })
    const [openNotification, setOpenNotification] = useState<boolean>(false)
    const [messageNotification, setMessageNotification] = useState<string>("")
    const [fetchCreateCategory, {data, error}] = useCreateCategoryMutation()
    const [fetchCategories] = useLazyGetCategoriesQuery()
    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const handleClose = () => setOpen(false);

    const createCategory = async () => {
        if(!form.name || !form.description){
            setMessageNotification("Не все обязательные поля заполнены!")
            return setOpenNotification(true)
        }
        await fetchCreateCategory(form)
    }

    const createCategoryTrigger = useCallback(() => {
        if(!error && data){
            setForm({
                name: '',
                description: ''

            })
            setMessageNotification(`Категория ${data.name} успешно создана!`)
            setOpenNotification(true)
            setOpen(false)
            return fetchCategories()
        }
        if(error){
            setMessageNotification(JSON.stringify(error))
            return setOpenNotification(true)
        }
    }, [data, error])

    useEffect(() => {
        createCategoryTrigger()
    }, [createCategoryTrigger])

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal_window__box">
                    <div className="add_modal__flex top">
                        <div className="add_modal__label">
                            Добавить категорию
                        </div>
                        <div className="add_modal_close" onClick={handleClose}>
                            <ClearIcon/>
                        </div>
                    </div>
                    <div className="add_modal_container">
                        <div className="add_modal__flex">
                            <div className="add_modal__flex_item">
                                <div className="add_modal__label">
                                    Название
                                </div>
                                <div className="add_modal__input_block">
                                    <TextField label="Название" variant="outlined" value={form.name} name="name"
                                               onChange={changeHandler}/>
                                </div>
                            </div>
                            <div className="add_modal__flex_item">
                                <div className="add_modal__label">
                                    Описание
                                </div>
                                <div className="add_modal__input_block">
                                    <TextField label="Описание" variant="outlined" name="description"
                                               value={form.description}
                                               onChange={changeHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_bottom">
                        <Button variant="contained" onClick={createCategory}>
                            Добавить категорию
                        </Button>
                    </div>
                </Box>
            </Modal>
            {/*Notification*/}
                <Snackbar
                    anchorOrigin={{vertical : "bottom", horizontal : "right"}}
                    open={openNotification}
                    onClose={() => setOpenNotification(false)}
                    message={messageNotification}
                    key={"bottom" + "right"}
                    autoHideDuration={2500}
                />
        </>

    );
};

