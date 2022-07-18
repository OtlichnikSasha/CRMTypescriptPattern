import React, {FC, useEffect, useState} from 'react';
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {EditModalWindowType} from "../../types/ModalWindowType";
import Button from "@mui/material/Button";
import {http} from "../../http"
import {ICategoryEdit, ICategory} from "../../types/CategoryType";
import Snackbar from "@mui/material/Snackbar";

export const EditModalWindow: FC<EditModalWindowType<ICategory>> = ({open, setOpen, entity}) => {
    const [form, setForm] = useState<ICategoryEdit>({
        name: entity.name,
        description: entity.description,
        id: entity.id
    })

    const [openNotification, setOpenNotification] = useState<boolean>(false)
    const [messageNotification, setMessageNotification] = useState<string>("")

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const handleClose = () => setOpen(false);
    const editCategory = async () => {
        try{
            await http.put(`/categories/${entity.id}`, form)
            setMessageNotification('Категория успешно изменена!')
            setOpenNotification(true)
        }
        catch(e){
            console.log('e', e)
        }
    }
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
                                    <TextField label="Название" variant="outlined"
                                               value={form.name}
                                               name="name"
                                               onChange={changeHandler}
                                    />
                                </div>
                            </div>
                            <div className="add_modal__flex_item">
                                <div className="add_modal__label">
                                    Описание
                                </div>
                                <div className="add_modal__input_block">
                                    <TextField label="Описание" variant="outlined"
                                               name="description"
                                               value={form.description}
                                               onChange={changeHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_bottom">
                        <Button variant="contained" onClick={editCategory}>
                            Сохранить изменения
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

