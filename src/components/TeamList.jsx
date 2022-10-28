import React from "react";
import { useState, useEffect } from 'react';

const TeamList = ({teamData, closeModal}) => {
  return (
    <div className="max-w-lg">
      <div className=" bg-white rounded-lg">
        <div className="p-5 w-full">
        <form class="flex w-full  max-w-lg justify-center items-center flex-col ">
          <h1 className="font-black text-2xl mb-5">
            EQUIPO {teamData.name_team}
          </h1>

          <div className="flex flex-col">
            <h2 className="font-black text-lg">Información general del equipo</h2>
            <div className="flex flex-col ml-3">
              <h3 className="font-bold text-md">Nombre del Couch</h3>
              <p>{teamData.name_couch}</p>
              <h3 className="font-bold text-md">Nombre del Equipo</h3>
              <p>{teamData.name_team}</p>
              <h3 className="font-bold text-md">División</h3>
              <p>{teamData.division.name}  ({teamData.division.min} - {teamData.division.max} años)</p>
            </div>

          <div className="flex flex-col">
            <h2 className="font-black text-lg">Miembros del equipo</h2>
            <div className="flex flex-col ml-3 max-h-40 overflow-y-scroll">
              {
                teamData.members?.filter(m => m.name.trim() != "" || m.number.trim() != "" || m.position.trim() != "" || m.edad > 0)?.map((m, index)=>(
                    <p className="text-md">#{index + 1} - {m.name} - Número {m.number} - Posición {m.position} - Edad {m.age}</p>
                ))
              }
            </div>

          </div>
          </div>


          <div className="flex justify-center items-center w-full mt-3">
              
              
              <button
                onClick={closeModal}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Cerrar
              </button>
            </div>
        </form>

        </div>
      </div>
    </div>
  );
};

export default TeamList;
