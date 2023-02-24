import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Ejercicios } from "./Ejercicios";
import { AiFillHome } from "react-icons/ai";
import { SiExercism } from "react-icons/si";

export const Navegación = () => {
  return (
    <BrowserRouter>
      <nav className="d-flex align-items-center justify-content-center">
        <Link to="/" className="nav-link link-success px-5">
          <AiFillHome />
          Inicio
        </Link>
        <Link to="/Ejercicios" className="nav-link link-success px-5" >
          <SiExercism /> Ejercicios
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ejercicios" element={<Ejercicios />} />
      </Routes>
    </BrowserRouter>
  );
};
