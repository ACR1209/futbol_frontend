import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import TeamList from "./TeamList";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import {teams as team_Data} from "../data"


const ShowTeams = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  const handleTeamModal = (team) => {
    setSelectedTeam(team);
    openModal();
  };

  function closeModal() {
    setIsOpen(false);
  }

  const [teams, setTeams] = useState(
    team_Data
  ); //get teams from database



  return (
    <div className="w-3/4 " style={{ maxHeight: "80vh" }}>
      <div className="shadow-xl bg-white rounded-lg">
        <div className="p-5 h-full">
          <h1 className="font-bold text-center text-3xl">EQUIPOS</h1>
          <br></br>
          <div className="flex items-center mb-5 justify-center w-full">
            <Link
              to="/register-team"
              className=" flex-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              CREAR NUEVO EQUIPO
            </Link>
            <div className=" ml-5 flex items-center justify-center flex-row flex-1">
              <div>
                <AiOutlineSearch className="mr-3" fontSize={25} />
              </div>
              <input
                className="shadow-lg   bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Buscar equipo..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
            </div>
          </div>
          <div className="overflow-y-auto " style={{ maxHeight: "50vh" }}>
            <table className="w-full h-full  rounded-xl table-auto border-spacing-5 text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Nombre del equipo
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Nombre del couch
                  </th>
                  <th scope="col" class="py-3 px-6">
                    División
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {teams
                  ?.filter((t) =>
                    t.name_team
                      .trim()
                      .toLowerCase()
                      .includes(query.trim().toLowerCase())
                  )
                  ?.map((t) => (
                    <tr>
                      <td
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {t.name_team}
                      </td>
                      <td class="py-4 px-6">{t.name_couch}</td>
                      <td class="py-4 px-6">
                        {t.division.name} ({t.division.min} - {t.division.max})
                      </td>
                      <td class="py-4 px-6 hover:text-white">
                        <button onClick={() => handleTeamModal(t)}>
                          Ver equipo
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <TeamList teamData={selectedTeam} closeModal={closeModal} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ShowTeams;
