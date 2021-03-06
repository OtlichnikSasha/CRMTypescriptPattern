import React, {FormEvent} from 'react';
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
import axios, {AxiosResponse} from "axios"
import {useAuth} from "../hooks/auth_hook"
import {LoginType} from "../types/UserType";

const theme = createTheme();

export const Login = () => {
    const auth = useAuth()
    console.log('process.env.REACT_APP_BACKEND_API', process.env.REACT_APP_BACKEND_API)
    const http = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_API,
        withCredentials: true
    })
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            username: data.get('username'),
            password: data.get('password'),
            rememberMe: true
        }
        try{
            const response:AxiosResponse<LoginType> = await http.post("/authenticate", userData)
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
                        ??????????????????????
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
                            label="????????????"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="?????????????????? ????????"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            ????????????????????????????
                        </Button>
                        {/*<Grid container>*/}
                        {/*    <Grid item xs className="offer_login_link">*/}
                        {/*        <Link to="#" variant="body2">*/}
                        {/*            ???????????? ?????????????*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item className="offer_login_link">*/}
                        {/*        <Link to="/sign_in" variant="body2">*/}
                        {/*            {"?? ?????? ?????? ????????????????? ????????????????????????????????????"}*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

