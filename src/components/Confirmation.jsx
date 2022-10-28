import React, { useState } from "react";
import {AiFillCaretRight} from "react-icons/ai"
import {AiFillCaretLeft} from "react-icons/ai"
import {BsDot} from "react-icons/bs"
import {AiFillCheckCircle} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";

const Confirmation = ({ stepFunction, teamData, members }) => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleRegister = (e) =>{
    e.preventDefault()
    const data = teamData
    data["members"] = members

    if(!data.name_couch || !data.name_team || !data.division?.name || data.members?.filter(m => m.name.trim() != "" && m.number.trim() != "" && m.position.trim() != "" && m.age >= data.division?.min && m.age <= data.division?.max ).length < 8){
      setError(true)
      setTimeout(()=>{
        setError(false)
      }, 3000)
      return 
    }
    // handle register api call

    // navigate to table
    //navigate("/") 
  }

  const handleContinue = (e, s) => {
    e.preventDefault();
    stepFunction(s);
  };

  return (
    <div className="shadow-xl bg-white rounded-lg">
      <div className="p-5">
        <form class="flex w-full max-w-lg justify-center items-center flex-col ">
        <div className="flex items-center mb-5 ">
                <Link className="mr-3 hover:text-gray-700" to="/">
                    <GrLinkPrevious/>
                </Link>
          

          <h1 className="font-black text-2xl ">
            CONFIRMACIÓN
          </h1>
          </div>

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
            <h2 className="font-black text-lg">Miembros del equipo (válidos)</h2>
            <div className="flex flex-col ml-3 max-h-40 overflow-y-scroll">
              {
                members.filter(m => (m.name != "" && m.number != "" && m.position != "" && m.age <= teamData.division?.max && m.age >= teamData.division?.min)).map((m, index)=>(
                    <p className="text-md">#{index + 1} - {m.name} - Número {m.number} - Posición {m.position} - Edad {m.age}</p>
                ))
              }
            </div>

          </div>
          </div>

          {
                    error ? (
                      <p class="text-red-500 text-xs italic">Hay un error con el formulario.</p>

                    ):(null)
            }
          <div className="flex justify-between items-center w-full mt-3">
              <button
                onClick={(e) => handleContinue(e, -1)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <AiFillCaretLeft />
              </button>
              <div className="flex items-center">
                <AiFillCheckCircle fontSize={30} color="green" />
                <AiFillCheckCircle fontSize={30} color="green" />
                <BsDot fontSize={40} color='blue'/>
              </div>
              <button
                onClick={handleRegister}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Registrar
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Confirmation;
