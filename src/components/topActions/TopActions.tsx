import React, {ChangeEvent, FC} from 'react';
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./topActions.scss"

interface PropsTypes{
    btnText: string,
    handleOpen: () => void,
    search: string,
    setSearch: (search: string) => void,
    startSearch: () => void,
    reloadData: () => void
}


export const TopActions: FC<PropsTypes> = ({btnText, handleOpen, search, setSearch, startSearch, reloadData}) => {
    return (
        <section className="top_container">
            <div className="top_container__btns">
                <Button variant="contained" onClick={handleOpen}>
                    + {btnText}
                </Button>
                <Button variant="contained" onClick={reloadData}>
                    <CachedIcon/>
                </Button>
            </div>
            <div className="search_users_btn">
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Поиск по таблице"
                    inputProps={{'aria-label': 'search google maps'}}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />
                <IconButton type="submit" sx={{p: '10px'}} aria-label="search"
                            onClick={startSearch}
                            disabled={!search}
                >
                    <SearchIcon/>
                </IconButton>
            </div>
        </section>
    );
};

