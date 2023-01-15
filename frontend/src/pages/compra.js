import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import { Typography, Paper, Box, Button} from "@mui/material";
import metodos from "../images/metodos.jpg";

export default function Compra() {
  return (
    <div>
      <AppBar />
      <Typography fontSize="25" align="center" sx={{ mt: 1, mb: 1 }}>CARRITO</Typography>
      <Grid container width="90%" sx={{mt:7, ml:5}}> 
            <Grid lg={6} component={Paper} square>
                <Grid container>
                    <Grid item lg={12} ml="25" mt="10" sx={{mt:1,ml:2.5,mb:1}}>
                        <Typography component="h1" variant="h5">PRODUCTOS</Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Paper><Typography fontSize={20} sx={{ml:3,mt:1}}><b>Producto 1:</b>   60€</Typography></Paper>
                    </Grid>
                    <Grid item lg={12}>
                        <Paper><Typography fontSize={20} sx={{ml:3,mt:1}}><b>Producto 2:</b>   24€</Typography></Paper>
                    </Grid>
                    <Grid item lg={12}>
                        <Paper><Typography fontSize={20} sx={{ml:3,mt:1}}><b>Producto 3:</b>   35€</Typography></Paper>
                    </Grid>
                    <Grid item lg={12}>
                        <Paper><Typography fontSize={20} sx={{ml:3,mt:1}}><b>Producto 4:</b>   48€</Typography></Paper>
                    </Grid>
                    <Grid item lg={12} ml="25" mt="10" sx={{mt:1,ml:2.5,mb:1}}>
                        <Typography component="h1" variant="h5">TOTAL:      167€</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} align="center">
                <Button sx={{mt:1}} variant="contained"><h1>COMPRAR AHORA</h1></Button>
                <Box sx={{mt:1}}><img src={metodos} alt="img" width="300px"/></Box>
            </Grid>
        </Grid>
    </div>
  );
}