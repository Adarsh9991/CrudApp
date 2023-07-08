import React from 'react'
import { AppBar, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <AppBar className="appbar position-static ">
        <Toolbar>
          <Link to="/home" className='nav-tab' >Home</Link>
          <Link to="/allusers" className="ms-3 nav-tab ">All Users</Link>
          <Link to="/adduser" className="ms-3 nav-tab ">Add User</Link>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar