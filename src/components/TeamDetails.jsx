import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const TeamDetails = ({
  stepFunction,
  handleChange,
  teamData,
  handleDivisionChange,
}) => {
  const [divisions, setDivisions] = useState([
    { code: "0001", name: "Division 1", max: 5, min: 3 },
    { code: "0002", name: "Division 2", max: 8, min: 6 },
    { code: "0003", name: "Division 3", max: 12, min: 9 },
    { code: "0004", name: "Division 4", max: 16, min: 13 },
    { code: "0005", name: "Division 5", max: 20, min: 17 },
  ]); // connect to database

  const handleContinue = (e) => {
    e.preventDefault();
    stepFunction(1);
  };

  return (
    <div className="shadow-xl bg-white rounded-lg">
      <div className="p-5">
        <form class="flex w-full max-w-lg justify-center items-center flex-col ">
          <div className="flex items-center   mb-5 ">
            <Link className="mr-3 hover:text-gray-700" to="/">
              <GrLinkPrevious />
            </Link>
            <h1 className="font-black text-2xl ">DATOS GENERALES DEL EQUIPO</h1>
          </div>

          <div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nombre Couch
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  name="name_couch"
                  value={teamData.name_couch}
                  onChange={handleChange}
                  type="text"
                  placeholder="Couch..."
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Nombre Equipo
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  name="name_team"
                  onChange={handleChange}
                  value={teamData.name_team}
                  type="text"
                  placeholder="Equipo..."
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  División
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    name="division"
                    defaultValue=""
                    onChange={(e) =>
                      handleDivisionChange(divisions[e.target.value])
                    }
                  >
                    <option value="" disabled>
                      Seleccione una opción...
                    </option>
                    {divisions.map((division, index) => (
                      <option value={index}>
                        {division.name} ({division.min} - {division.max} años)
                      </option>
                    ))}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <button
              onClick={handleContinue}
              disabled
              className="bg-transparent  text-gray-400 font-semibold  py-2 px-4 border border-gray-400 rounded"
            >
              <AiFillCaretLeft />{" "}
            </button>
            <div className="flex">
              <BsDot fontSize={40} color="blue" />
              <BsDot fontSize={40} />
              <BsDot fontSize={40} />
            </div>
            <button
              onClick={handleContinue}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <AiFillCaretRight />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamDetails;
