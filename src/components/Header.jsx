import React from "react";
import { Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import useAuth from "../hooks/useAuth";
import Busqueda from "./Busqueda";

const Header = () => {
  const { handleBuscador, cerrarSesionProyectos } = useProyectos();
  const { cerrarSesionAuth } = useAuth();

  const handleCerrarSesion = () => {
    cerrarSesionAuth();
    cerrarSesionProyectos();
    localStorage.removeItem("token");
  };
  return (
    <>
      <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
          <h2 className="text-4xl text-sky-400 font-black text-center mb-5 md:mb-0">
            <Link to="/proyectos">UpTask</Link>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              type="button"
              className="font-bold uppercase hover:text-gray-600"
              onClick={handleBuscador}
            >
              Buscar Proyectos
            </button>

            <Link
              to="/proyectos"
              className="text-white text-sm bg-sky-600 hover:bg-sky-900 p-3 rounded-md uppercase font-bold"
            >
              Proyectos
            </Link>
            <button
              type="button"
              className="text-white text-sm bg-red-600 hover:bg-red-900 p-3 rounded-md uppercase font-bold"
              onClick={handleCerrarSesion}
            >
              Cerrar Sesion
            </button>
            <Busqueda />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
