import React, {useState, FC} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import axios from 'axios'

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

interface PropTypes{
    open: boolean,
    setOpen: React.ComponentState
}

export const AddModalWindow: FC<PropTypes> = ({open, setOpen}) => {
    const [form, setForm] = useState({
        login: '',
        password: '',
        email: '',
        local: 1,
        role: 1,
    })

    const changeHandler = (event:any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const addUser = () => {
        console.log('form', form)
        console.log(form.email.includes('@'))
        if(form.login.length < 3 || form.password.length < 4 || !form.email.includes('@')) return
        console.log('form', form)
        axios.post("/api/user", {...form}).then(r => console.log('r', r))
    }
    const handleClose = () => setOpen(false);
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
                        Добавить пользователя
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
                                <TextField label="Логин" variant="outlined" name="login" onChange={changeHandler} />
                            </div>
                        </div>
                        <div className="add_modal__flex_item">
                            <div className="add_modal__label">
                                Пароль
                            </div>
                            <div className="add_modal__input_block">
                                <TextField type="password" label="Пароль" variant="outlined"  name="password" onChange={changeHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="add_modal__flex">
                        <div className="add_modal__flex_item">
                            <div className="add_modal__label">
                                Email
                            </div>
                            <div className="add_modal__input_block">
                                <TextField label="Email" variant="outlined"  name="email" onChange={changeHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="add_modal__label role">
                        Роль
                    </div>
                    <div className="add_modal__flex">
                        <div className="add_modal__role_block">
                            <div className="role_block__flex">
                                <FormControlLabel label="Администратор" value="2" checked={form.role == 2} name="role" control={<Radio />} onChange={changeHandler} />
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
                                <FormControlLabel label="Пользователь" value="1" name="role" checked={form.role == 1} control={<Radio />} onChange={changeHandler} />
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
                    <Button variant="contained" onClick={addUser}>
                        Добавить пользователя
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

