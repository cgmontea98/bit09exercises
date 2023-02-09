import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Ejercicios } from "./Ejercicios";

export const Nav = () => {
  return (
    <BrowserRouter>
      <h2>Componente Navegación</h2>
      <nav>
        <Link to="/Inicio">Inicio</Link>
        <Link to="/Ejercicios">Ejercicios</Link>
      </nav>
      <Routes>
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/Ejercicio" element={<Ejercicios />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
