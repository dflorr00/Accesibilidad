import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';

export default function ResponsiveAppBar() {
  
  return (
    <div>
    <Paper sx={{bgcolor: '#1E9609'}} square>
      <Button href={"/inicio"} sx={{color: "black"}}><h3>BIRDSHOP</h3></Button>
    </Paper>
    <Paper sx={{bgcolor: 'white'}} square>
      <Grid container>
        <Grid item lg={9}>
          <Grid container>
          <Grid item lg={1.5}><Button href={"/inicio"} sx={{ my: 1, color: "black", display: "block" }}>Inicio</Button></Grid>
          <Grid item lg={1.5}><Button href={"/productos"} sx={{ my: 1, color: "black", display: "block" }}>Prodcutos</Button></Grid>
          <Grid item lg={1.5}><Button href={"/contacto"} sx={{ my: 1, color: "black", display: "block" }}>Contacto</Button></Grid>
          <Grid item lg={1.5}><Button href={"/Blog"} sx={{ my: 1, color: "black", display: "block" }}>Blog</Button></Grid>
          </Grid>
        </Grid>
        <Grid item lg={3}>
          <Grid container>  
          <Grid item lg={4}><Button href={"/Ajustes"} sx={{ my: 1, color: "black", display: "block" }}>Ajustes</Button></Grid>
          <Grid item lg={4}><Button href={"/Compra"} sx={{ my: 1, color: "black", display: "block" }}>Carrito</Button></Grid>
          <Grid item lg={4}><Button href={"/login"} sx={{ my: 1, color: "black", display: "block" }}>Salir</Button></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}
