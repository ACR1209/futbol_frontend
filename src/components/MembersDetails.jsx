import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import MemberDetail from "./MemberDetail";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const MembersDetails = ({
  stepFunction,
  teamData,
  members,
  addMember,
  handleMember,
}) => {
  const [numMembers, setNumMembers] = useState(1);
  const handleContinue = (e, s) => {
    e.preventDefault();
    stepFunction(s);
  };

  const increseMember = (e) => {
    e.preventDefault();
    addMember();
    setNumMembers((numMembers) => numMembers + 1);
  };

  return (
    <div className="w-full mx-5 flex justify-center items-center">
      <div className="shadow-xl w-full flex justify-center items-center bg-white rounded-lg">
        <div className="w-full p-5 flex">
          <form class="flex w-full justify-center items-center flex-col ">
            <div className="flex items-center   mb-5 ">
              <Link className="mr-3 hover:text-gray-700" to="/">
                <GrLinkPrevious />
              </Link>
              <h1 className="font-black text-2xl">MIEMBROS DEL EQUIPO</h1>
            </div>
            <div className="w-full">
              <div class="flex flex-wrap -mx-3 mb-6 w-full max-h-80 overflow-y-auto">
                {members?.map((member, index) => {
                  return (
                    <MemberDetail
                      key={index}
                      num={index + 1}
                      handleMember={handleMember}
                      member={member}
                      max={teamData.division.max}
                      min={teamData.division.min}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                onClick={increseMember}
                className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                +
              </button>
            </div>
            <div className="flex justify-between items-center w-full">
              <button
                onClick={(e) => handleContinue(e, -1)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <AiFillCaretLeft />{" "}
              </button>
              <div className="flex items-center">
                <AiFillCheckCircle fontSize={30} color="green" />
                <BsDot fontSize={40} color="blue" />
                <BsDot fontSize={40} />
              </div>
              <button
                onClick={(e) => handleContinue(e, 1)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <AiFillCaretRight />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MembersDetails;
