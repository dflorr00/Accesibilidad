import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import contacto from "../images/contacto.jpg";

export default function Contacto() {
  return (
    <div>
        <AppBar />
        <Grid container justifyContent="center" sx={{mt:7}}> 
            <Grid lg={5} component={Paper} square>
                <Grid container>
                    <Grid item lg={12} align="center" mt="10">
                        <Typography component="h1" variant="h5">CONTÁCTANOS POR DONDE PREFIERAS</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Correo electrónico:</b></u> info@birdshop.com</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Número de teléfono:</b></u> 988 88 77 88</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18"><u><b>Facebook:</b></u> @birdshop</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="18">
                            <u><b>Tienda física:</b></u>
                            <div> Birdshop S.L.</div>
                            <div> Calle ancha Nº, León</div>
                            <div>24009 León (León)</div>
                            </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={5} component={Paper} align="center">
                <Box sx={{mt:10}}><img src={contacto} alt="img" width="400px"/></Box>
            </Grid>
        </Grid>
    </div>
  );
}