import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = (props) => (


    <div id="mySidenav" className="sidenav">
        <h1>Your best weather app</h1>
        <Link to = "javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</Link>
        <Link to="#">Team</Link>
        <Link to="#">History</Link>
        <Link to="#">Contact</Link>
    </div>
);

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

export default Sidebar;