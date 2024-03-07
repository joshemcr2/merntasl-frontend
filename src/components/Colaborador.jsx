import React from "react";
import useProyectos from "../hooks/useProyectos";

const Colaborador = ({ colaborador }) => {
  const { handleModalEliminarColaborador } = useProyectos();
  const { nombre, email } = colaborador;
  return (
    <>
      <div className="border-b p-5 flex justify-between items-center">
        <div>
          <p>{nombre}</p>
          <p className="text-sm text-gray-700">{email}</p>
        </div>

        <div>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-900 px-3 py-3 uppercase font-bold rounded-lg text-sm text-white"
            onClick={() => handleModalEliminarColaborador(colaborador)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Colaborador;
