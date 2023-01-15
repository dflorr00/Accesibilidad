import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import { Button, Typography, Paper, Box} from "@mui/material";
import perfil from "../images/perfil.jpg";
import paypal from "../images/paypal.jpg";
import { CheckBox } from "@mui/icons-material";

export default function Ajustes() {
  return (
    <div>
      <AppBar />
      <Typography fontSize="25" align="center" sx={{ mt: 1, mb: 1 }}>Ajustes</Typography>
      <Grid container justifyContent="center" sx={{mt:7}}>
            <Grid item lg={3} align="center">
                <Box sx={{mt:1}}><img src={perfil} alt="img" width="250px"/></Box>
                <Button>Cerrar Sesión</Button>
            </Grid> 
            <Grid lg={9} component={Paper} square>
                <Grid container>
                    <Grid item lg={12} ml="25" mt="10">
                        <Typography component="h1" variant="h5">Opciones</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Nombre de usuario:</b></u> Usuario1</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Correo electrónico:</b></u> info@birdshop.com</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Número de teléfono:</b></u> 988 88 77 88</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Método de pago favorito:</b></u> <img width="100px" src={paypal} alt="img"/></Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Modo para daltónicos:</b></u>  <CheckBox/></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}