import React from "react";
import "./navbar.css";
import {Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Navbar(){
    return (
        <>
        <nav classsName ='navbar'>
            <h3 className='logo' id="LOGO">EAZYGHAR</h3>
            <ul className="nav-links">
               <li> <Link to ="/admin" className="admin">Sanjay Jain</Link></li>
               <li> <Link to ="/pos" className="pos"  >Admin </Link></li>
            </ul>
            <AccountCircleIcon/>
            <MoreVertIcon />
        </nav>
        </>
    )
}
export default Navbar;