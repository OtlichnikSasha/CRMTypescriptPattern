import React from 'react';
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import DeleteIcon from '@mui/icons-material/Delete';

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

const languages = [
    {label: "Русский"},
    {label: "Английский"}

]
export const EditModalWindow = ({open, setOpen, user}) => {
    const handleClose = () => setOpen(false);
    console.log('user', user)
    if (user) {
        return (

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="add_modal__flex top">
                        <div className="add_modal__label">
                            Редактировать пользователя
                        </div>
                        <div className="add_modal_close" onClick={handleClose}>
                            <ClearIcon/>
                        </div>
                    </div>
                    <div className="add_modal_container">
                        <div className="add_modal__flex">
                            <div className="add_modal__flex_item">
                                <div className="add_modal__label">
                                    Логин
                                </div>
                                <div className="add_modal__input_block">
                                    <TextField variant="outlined" value={user.login}/>
                                </div>
                            </div>
                            <div className="add_modal__flex_item">
                                <div className="add_modal__label">
                                    Фамилия
                                </div>
                                <div className="add_modal__input_block">
                                    <TextField variant="outlined" value={user.surname}/>
                                </div>
                            </div>
                        </div>
                        <div className="add_modal__flex">
                            <div className="add_modal__flex_item">
                                <div className="add_modal__label">
                                    Email
                                </div>
                                <div className="add_modal__input_block">
                                    <TextField variant="outlined" value={user.email}/>
                                </div>
                            </div>
                            <div className="add_modal__flex_item">
                                <div className="add_modal__label">
                                    Локаль
                                </div>
                                <div className="add_modal__input_block">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={languages}
                                        renderInput={(params) => <TextField {...params} label="Русский"/>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="add_modal__label role">
                            Роль
                        </div>
                        <div className="add_modal__flex">
                            <div className="add_modal__role_block">
                                <div className="role_block__flex">
                                    <FormControlLabel label="admin" value="admin" control={<Radio/>}/>
                                    <div className="role_block__text">
                                        <div className="role_block__text_heading">
                                            Администратор
                                        </div>
                                        <div className="role_block__text_content">
                                            Неограниченный доступ ко всем документам, справочникам и настройкам системы
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="add_modal__role_block">
                                <div className="role_block__flex">
                                    <FormControlLabel label="user" value="user" control={<Radio/>}/>
                                    <div className="role_block__text">
                                        <div className="role_block__text_heading">
                                            Пользователь
                                        </div>
                                        <div className="role_block__text_content">
                                            Доступ к документам и справочникам с возможностью тонкой настройки
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="add_modal__label">Фирмы</div>
                        <div className="add_modal__input_block">
                            <Autocomplete
                                disablePortal
                                options={languages}
                                renderInput={(params) => <TextField {...params} label="Выберите"/>}
                            />
                        </div>
                        <div className="bottom_users">
                            <Button variant="contained">
                                Сохранить изменения
                            </Button>
                            <Button variant="contained">
                                Изменить пароль
                            </Button>
                            <Button variant="contained" className="remove_button">
                                <DeleteIcon/> Удалить
                            </Button>

                        </div>
                    </div>
                </Box>
            </Modal>
        );
    }
    return <></>
};

