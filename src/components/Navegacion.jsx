import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Ejercicios } from "./Ejercicios";
import Nav from "react-bootstrap/Nav";
import { AiFillHome } from "react-icons/ai";
import { SiExercism } from "react-icons/si";

export const Navegación = () => {
  return (
    <BrowserRouter>
      <nav className="d-flex align-items-center justify-content-center">
        <Link to="/Inicio" className="nav-link link-success px-5">
          <AiFillHome />
          Inicio
        </Link>
        <Link className="nav-link link-success px-5" to="/Ejercicios">
          <SiExercism /> Ejercicios
        </Link>
      </nav>
      <Routes>
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/Ejercicios" element={<Ejercicios />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
