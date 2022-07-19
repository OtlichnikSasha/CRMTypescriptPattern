import React, {FC, useState, useEffect, useCallback} from 'react';
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {OutlinedInput} from "@mui/material";
import {IModalWindowCreate} from "../../types/ModalWindowType";
import {IProductCreate} from "../../types/ProductType";
import {useCreateProductMutation} from "../../store/api/product.api";
import {useLazyGetCategoriesQuery} from "../../store/api/category.api";

export const AddModalWindow: FC<IModalWindowCreate> = ({open, setOpen}) => {
    const [form, setForm] = useState<IProductCreate>({
        name: '',
        views: 0,
        price: 0,
        amount: 0,
        availability: false,
        discountPrice: 0,
        description: '',
        categories: []
    })
    const [fetchCreateProduct, {isLoading, error, data}] = useCreateProductMutation()
    const [fetchCategories, {isLoading: categoryLoading, data: categories}] = useLazyGetCategoriesQuery()

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if(open && !categories?.length) {
            fetchCategories()
        }
    }, [open, categories])

    const addProduct = async () => {
        await fetchCreateProduct(form)

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
            <Box className="modal_window__box">
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
                                    placeholder="Выберите категории"
                                >
                                    {categories?.length && categories?.map(category => (
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
                    <Button variant="contained" onClick={addProduct}>
                        Добавить товар
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

