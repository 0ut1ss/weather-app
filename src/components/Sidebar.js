import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = (props) => (


    <div className="sidebar">
        <div id="mySidenav" className="sidebar__sidenav">
            <Link to = "javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</Link>
            <h1>Your best weather app</h1>
            <Link to="#">Team</Link>
            <Link to="#">History</Link>
            <Link to="#">Contact</Link>
        </div>
        
        <span className= "spanStyle" onClick={openNav}> &#8801; </span>
    </div>
);

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = (e) => {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
}

const test = () => console.log('testing');


export default Sidebar;