import React, {FC, useCallback, useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {OutlinedInput} from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {EditModalWindowType} from "../../types/ModalWindowType";
import {IProduct} from "../../types/ProductType";
import {AxiosResponse} from "axios";
import {http} from "../../http";
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

export const EditModalWindow:FC<EditModalWindowType<IProduct>> = ({open, setOpen, entity}) => {
    const handleClose = () => setOpen(false);
    const [form, setForm] = useState<IProduct>({
        orders: null,
        name: '',
        amount: 0,
        price: 0,
        description: '',
        availability: true,
        discountPrice: 0,
        id: 0,
        views: 0,
        categories: [],
        images: null
    })
    const [categories, setCategories] = useState<ICategory[]>([])
    useEffect(() => {
        if(entity) {
            setForm(entity)
        }
    }, [entity])

    const getCategories = useCallback(async () => {
        console.log('Зашли!')
        try {
            const response: AxiosResponse<ICategory[]> = await http.get("/categories")
            setCategories([...categories, ...response.data])
        } catch (e) {
            console.log('e', e)
        }
    }, [])

    useEffect(() => {
        if(open) {
            getCategories()
        }
        return () => {
            setCategories([])
        }
    }, [open])

    const editProduct = async () => {
        try {
            const data: AxiosResponse<any> = await http.put("/products", form)
            if (data.status === 201 || data.status === 200) {
                setForm({
                    id: 0,
                    images: null,
                    orders: null,
                    name: '',
                    views: 0,
                    price: 0,
                    amount: 0,
                    availability: false,
                    discountPrice: 0,
                    description: '',
                    categories: []
                })
            }
        } catch (e) {
            console.log('e', e)
        }
    }


    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

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
                        Добавить товар
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
                    <div className="add_modal__flex">
                        <div className="add_modal__flex_item">
                            <div className="add_modal__label">
                                Цена
                            </div>
                            <div className="add_modal__input_block">
                                <TextField label="Цена"
                                           variant="outlined"
                                           name="price"
                                           type="number"
                                           value={form.price ? form.price : ""}
                                           onChange={changeHandler}/>
                            </div>
                        </div>

                        <div className="add_modal__flex_item">
                            <div className="add_modal__label">
                                Скидочная цена
                            </div>
                            <div className="add_modal__input_block">
                                <TextField label="Скидочная цена"
                                           variant="outlined"
                                           name="discountPrice"
                                           type="number"
                                           value={form.discountPrice ? form.discountPrice : ""}
                                           onChange={changeHandler}/>
                            </div>
                        </div>
                        <div className="add_modal__flex_item">
                            <div className="add_modal__label">
                                Наличие
                            </div>
                            <div className="add_modal__input_block">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="availability"
                                    value={form.availability}
                                    label="Наличие"
                                    onChange={changeHandler}
                                >
                                    <MenuItem value="true">В наличии</MenuItem>
                                    <MenuItem value="false">Нет в наличии</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div className="add_modal__flex_item">
                            <div className="add_modal__label">
                                Кол-во
                            </div>
                            <div className="add_modal__input_block">
                                <TextField label="Кол-во"
                                           variant="outlined"
                                           name="amount"
                                           type="number"
                                           value={form.amount ? form.amount : ""}
                                           onChange={changeHandler}/>
                            </div>
                        </div>
                    </div>
                    <div className="add_modal__flex">
                        <div className="add_modal__flex_item">
                            <div className="add_modal__label">
                                Категории
                            </div>
                            <div className="add_modal__input_block">
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={form.categories}
                                    onChange={changeHandler}
                                    input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}
                                >
                                    {categories.length && categories.map(category => (
                                        <MenuItem
                                            key={category.id}
                                            value={category.id}

                                        >
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal_bottom">
                    <Button variant="contained" onClick={editProduct}>
                        Сохранить изменения
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

