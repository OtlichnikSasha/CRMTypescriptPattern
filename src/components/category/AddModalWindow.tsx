import React, {FC, useState} from 'react';
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {AddModalWindowType} from "../../types/ModalWindowType";
import Button from "@mui/material/Button";
import {http} from "../../http"
import {AxiosResponse} from "axios";
import Snackbar from "@mui/material/Snackbar";
import {ICategory} from "../../types/CategoryType";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const vertical = "bottom"
const horizontal = "right"

export const AddModalWindow: FC<AddModalWindowType> = ({open, setOpen}) => {
    const [form, setForm] = useState({
        name: '',
        description: ''
    })
    const [openNotification, setOpenNotification] = useState<boolean>(false)
    const [messageNotification, setMessageNotification] = useState<string>("")


    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleClose = () => setOpen(false);

    const addCategory = async () => {
        try {
            const data: AxiosResponse<ICategory> = await http.post("/categories", form)
            setMessageNotification(`Категория "${data.data.name}" успешно создана!`)
            setOpenNotification(true)
            setForm({
                name: '',
                description: ''
            })
        } catch (e) {
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
                <Box sx={style}>

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
                        <Button variant="contained" onClick={addCategory}>
                            Добавить категорию
                        </Button>
                    </div>
                </Box>
            </Modal>
            {/*Notification*/}
            <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={openNotification}
                onClose={() => setOpenNotification(false)}
                message={messageNotification}
                key={vertical + horizontal}
                autoHideDuration={2500}
            />
        </>

    );
};

