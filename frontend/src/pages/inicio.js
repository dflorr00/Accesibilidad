import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import agapornis from "../images/agapornis.jpg";
import baltimore from "../images/BaltimoreOriole.jpg";
import chirigue from "../images/chirigue.jpeg";
import guacamayo from "../images/guacamayo.jpg";
import paradise from "../images/paradiseTenager.jpg";
import protonotaria from "../images/ProtonotariaCitrea.jpg";

export default function Inicio() {
  return (
    <div>
        <AppBar />
        <Typography fontSize="25" align="center" sx={{ mt: 1, mb: 1 }}>Inicio</Typography>
        <Grid container>
            <Grid item lg={4}><Box align="center"><img src={agapornis} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4}><Box align="center"><img src={baltimore} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4}><Box align="center"><img src={chirigue} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4} align="center">Agapornis</Grid>
            <Grid item lg={4} align="center">Baltimore Oriole</Grid>
            <Grid item lg={4} align="center">Chirigüe</Grid>

            <Grid item lg={4}><Box align="center"><img src={guacamayo} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4}><Box align="center"><img src={paradise} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4}><Box align="center"><img src={protonotaria} alt="img" height="240px" width="400px"/></Box></Grid>
            <Grid item lg={4} align="center">Guacamayo</Grid>
            <Grid item lg={4} align="center">Paradise Tenager</Grid>
            <Grid item lg={4} align="center">Protonotaria Citrea</Grid>
        </Grid>
    </div>
  );
}