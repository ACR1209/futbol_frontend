import React, { useState } from 'react'
import TeamDetails from './TeamDetails'
import MembersDetails from './MembersDetails'
import Confirmation from './Confirmation'
//import Success from './Success'

/**
 * Component for the teams registration.
 * Retrives:
 *  Team Details: Id (uuid), Name Representative, Name team, Division 
 *  Team Member details: Names, Positions, Number, Ages, ID (uuid)
 * 
 * @returns 
 */

const Inscription = () => {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({

  })
  const [teamData, setTeamData] = useState({
    name_couch: '',
    name_team: '',
    division: {code: '', name: '', max: 0, min: 0},
  })

  const [members, setMembers] = useState([
    {name: "", position: "", number:"", age:"" },
    {name: "", position: "", number:"", age:"" },
    {name: "", position: "", number:"", age:"" },
    {name: "", position: "", number:"", age:"" },
    {name: "", position: "", number:"", age:"" },
    {name: "", position: "", number:"", age:"" },
    {name: "", position: "", number:"", age:"" },
    {name: "", position: "", number:"", age:"" },
  ])

  const handleStep = (s) => {
    const currentStep = step + s

    if(!(currentStep < 1 || currentStep > 4 )){
      setStep(currentStep)
    }
  }

  const handleChange = (e) => {

    setTeamData({...teamData, [e.target.name]: e.target.value })
  }

  const handleDivisionChange = (d) => {
    setTeamData({...teamData, division: d })
  } 

  const handleMember = (index, e) => {
    let data = [...members];
    data[index][e.target.name] = e.target.value;
    setMembers(data);
    console.log(members);
  }

  const addMember = ()=>{
    setMembers([...members, {name: "", position: "", number:"", age:"" }  ])
  }

  switch (step) {
    case 1:
      return(
        
        <TeamDetails
          stepFunction = {handleStep}
          handleChange = {handleChange} 
          handleDivisionChange ={handleDivisionChange}
          teamData = {teamData}
        />
      )
    case 2:
      return(
        <MembersDetails
          stepFunction = {handleStep}
          handleChange = {handleChange}
          addMember = {addMember}
          handleMember = {handleMember}
          members = {members}
          teamData = {teamData}
        />
      )
    case 3:
      return(
        <Confirmation
          stepFunction = {handleStep}
          teamData = {teamData}
          members = {members}
        />
      )
    case 4:
      return(
        <h1/>
      )
  
    default:
      break;
  }
}

export default Inscription