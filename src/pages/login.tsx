import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"
import {BACKEND_API} from "../global_variables"
import {useAuth} from "../hooks/auth_hook"
import {LoginType} from "../types/UserType";

const theme = createTheme();

export const Login = () => {
    const auth = useAuth()
    const handleSubmit = async (event: any) => {
        const http = axios.create({
            baseURL: BACKEND_API
        })
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            username: data.get('username'),
            password: data.get('password'),
            rememberMe: true
        }
        try{
            const response:LoginType = await http.post("/authenticate", userData)
            console.log('response', response)
            localStorage.setItem("token", response.data.id_token)
        }
        catch(e){
            console.log('e', e)
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомнить меня"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Авторизоваться
                        </Button>
                        {/*<Grid container>*/}
                        {/*    <Grid item xs className="offer_login_link">*/}
                        {/*        <Link to="#" variant="body2">*/}
                        {/*            Забыли пароль?*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item className="offer_login_link">*/}
                        {/*        <Link to="/sign_in" variant="body2">*/}
                        {/*            {"У вас нет аккаунта? Зарегистрироваться"}*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

