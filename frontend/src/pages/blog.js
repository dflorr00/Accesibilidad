import * as React from "react";
import AppBar from "../components/Appbar";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import pajaros from "../images/pajaros.jpg";

export default function Blog() {
  return (
    <div>
      <AppBar />
      <Typography fontSize="25" align="center" sx={{ mt: 1, mb: 1 }}>Blog</Typography>
      <Grid container justifyContent="center" sx={{mt:7}}>
            <Grid item lg={5} component={Paper} align="center">
                <Box sx={{mt:1}}><img src={pajaros} alt="img" width="400px"/></Box>
            </Grid> 
            <Grid lg={5} component={Paper} square>
                <Grid container>
                    <Grid item lg={12} ml="25" mt="10">
                        <Typography component="h1" variant="h5">GUÍA PARA APRENDER A IDENTIFICAR AVES</Typography>
                    </Grid>
                    <Grid item lg={12} sx={{mt:5,ml:5}}>
                        <Typography fontSize="15">
                        <p><b>1.Tamaño: </b>Es la primera característica a observar.¿Es más grande o más pequeña que otra especie que ya conoces?
                        Si avistas el ave de lejos, quizá te resulte difícil calcular el tamaño. Intenta tomar como punto de referencia
                        algún objeto que el ave tenga cerca: un árbol, una planta… Recomendación: ¡no sueltes de la mano tus prismáticos! 
                        </p><p>
                        <b>2.Forma: </b>¿Cómo es su silueta? Contempla los detalles: ¿cómo es su plumaje, su pico o su cola? Comparar la forma 
                        con la de otras aves que ya conozcas puede ser una buena táctica.
                        </p><p>
                        <b>3.Comportamiento: </b>Si consigues avistar al ave alimentándose, fíjate en su alimento: si son frutas, gusanos, 
                        semillas… Observa también dónde ha decidido posarse: un árbol, cerca de un arbusto… Estos dos detalles podrán 
                        ayudarte a identificar la categoría general del ave.
                        </p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}