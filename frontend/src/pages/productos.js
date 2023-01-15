import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import agapornis from "../images/agapornis.jpg";
import jaulas from "../images/jaulas.jpg";
import accesorios from "../images/Accesorios.jpg";
import antiparasitos from "../images/Antiparasitos.jpg";
import alimento from "../images/alimento.jpg";

export default function Productos() {
  return (
    <div>
      <AppBar />
      <Typography fontSize="25" align="center" sx={{ mt: 1, mb: 1 }}>Productos</Typography>
      <Grid container>
            <Grid item lg={4}><Box align="center"><img src={jaulas} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4}><Box align="center"><img src={accesorios} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4}><Box align="center"><img src={antiparasitos} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4} align="center">Jaulas y transportines</Grid>
            <Grid item lg={4} align="center">Accesorios</Grid>
            <Grid item lg={4} align="center">Antiparásitos</Grid>

            <Grid item lg={6}><Box align="center"><img src={alimento} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={6}><Box align="center"><img src={agapornis} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={6} align="center">Alimentación</Grid>
            <Grid item lg={6} align="center">Pájaros</Grid>
        </Grid>
    </div>
  );
}