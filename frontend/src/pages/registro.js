import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export default function Registro() {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    return (
        <CardContent align="center" >
            <Card align="left" sx={{ width: "50%" }}>
                <CardContent>
                {/*Logo y titulo*/}
                <Avatar sx={{ m: 1, bgcolor: '#1E9609' }}><LockOutlinedIcon /></Avatar>
                <Typography component="h1" variant="h5">Registrarse</Typography>
                {/*Formulario de registro*/}
                <Box component="form" onSubmit={()=>navigate('/login')}>
                    <Grid container spacing={0} >
                        <Grid item xs={6} ><TextField margin="normal" required fullWidth label="Nombre" name="name" /></Grid>
                        <Grid item xs={6}><TextField margin="normal" required fullWidth label="Apellidos" name="surname" /></Grid>
                        <Grid item xs={12}><TextField margin="normal" required fullWidth label="Nombre de usuario" name="username" /></Grid>
                        <Grid item xs={12}><TextField margin="normal" required fullWidth label="Correo Electrónico" name="email" /></Grid>
                        <Grid item xs={6}><TextField margin="normal" required fullWidth label="Contraseña" name="password" type="password" /></Grid>
                        <Grid item xs={6}><TextField margin="normal" required fullWidth label="Repite la Contraseña" name="passwordrepeat" type="password" /></Grid>
                        <Grid item xs={18} sx={{ padding: "0px" }}>
                            <FormControlLabel control={<Checkbox onChange={()=>setAgree(!agree)} />} label="He leido y acepto la declaracion de privacidad" />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }} disabled={!agree}> Registrarse </Button>
                </Box>
                <Box component="form" onSubmit={()=>navigate('/login')}><Button type="submit" fullWidth variant="outlined" sx={{ mb: 2 }}  > Volver al inicio de sesión</Button></Box>
                </CardContent>
            </Card>
        </CardContent>
    );
}