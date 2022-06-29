import React, {FC} from 'react';
import Button from "@mui/material/Button";
import {AddModalWindow} from "./block/user/AddModalWindow";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {EditModalWindow} from "./block/user/EditModalWindow";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


const actions = [
    {label: "Редактировать"},
    {label: "Удалить"}
]



export const ItemActions= ({data}) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [openModal, setOpenModal] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [action, setAction] = React.useState(0);
    const actionRef = React.useRef(null)
    const handleChange = (event:any) => {
        if (event.target.value) setOpenEditModal(true)
    };
    const handleClick = () => {
    };

    const handleMenuItemClick = (event: any, index: number) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    // const handleClose = (event: any) => {
    //     if (anchorRef && anchorRef.current && anchorRef.current?.contains(event.target)) {
    //         return;
    //     }
    //     setOpen(false);
    // };

    const changeAction = () => {
        console.log(actionRef)
    }

    const openEditModalWindow = () => {
        setOpenEditModal(true)
    }

    const handleOpen = () => setOpenModal(true);
    return (
        <section className="top_container">
            <div className="top_container__btns">
                <Button variant="contained" onClick={handleOpen}>
                    + Добавить пользователя
                </Button>
                <AddModalWindow setOpen={setOpenModal} open={openModal}/>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Действия</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={action}
                        label="Действия"
                        onChange={handleChange}
                    >
                        <MenuItem value={1} onClick={openEditModalWindow}>Редактировать</MenuItem>
                        <MenuItem value={2}>Удалить</MenuItem>
                    </Select>
                </FormControl>
                <EditModalWindow open={openEditModal} setOpen={setOpenEditModal} user={data}/>
            </div>
            <div className="search_users_btn">
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Поиск по таблице"
                    inputProps={{'aria-label': 'search google maps'}}
                />
                <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </div>
        </section>
    );
};

