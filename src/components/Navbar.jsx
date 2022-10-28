import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <NavLink to="/teams">
            Ver equipos
        </NavLink>
        <NavLink to="/register-team">
            Registrar equipo
        </NavLink>

    </nav>
  )
}

export default Navbar