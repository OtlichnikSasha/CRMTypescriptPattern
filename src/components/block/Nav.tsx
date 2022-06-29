import {Link} from "react-router-dom"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logout from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const nav_items = [
    { name: "Сотрудники", icon: <BadgeIcon/>, link: "/staffs"},
    { name: "Категории", icon: <CategoryIcon/>, link: "/categories"},
    { name: "Товары", icon: <ShoppingCartIcon/>, link: "/products"},
    { name: "Заказы", icon: <ShoppingBasketIcon/>, link: "/orders"},
    { name: "Пользователи", icon: <PeopleIcon/>, link: "/users"}
]
// const [openCollapse, setOpenCollapse] = React.useState(false);
// const handleClick = () => {
//     setOpenCollapse(!openCollapse);
// };

const deleteSession = () => {
}

export const nav = (

    <>
        {
            nav_items.map(item => {
                return (
                    <>
                        <Link to={item.link}>
                            <ListItemButton key={`nav-${item.name}`}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.name}/>
                            </ListItemButton>
                        </Link>
                    </>

                )
            })
        }
        <ListItemButton onClick={deleteSession}>
            <ListItemIcon><Logout/></ListItemIcon>
            <ListItemText primary="Выйти"/>
        </ListItemButton>
    </>
);
