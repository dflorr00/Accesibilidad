import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Registro from './pages/registro';
import Inicio from './pages/inicio';
import Productos from './pages/productos';
import Contacto from './pages/contacto';
import Blog from './pages/blog';
import Ajustes from './pages/ajustes';
import Compra from './pages/compra';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registro' element={<Registro/>}></Route>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/ajustes' element={<Ajustes/>}></Route>
        <Route path='/compra' element={<Compra/>}></Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;