import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = (props) => (


    <div className="sidebar">
        <div id="mySidenav" className="sidebar__sidenav">
            <Link to = "javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</Link>
            <div className= "sidebar-content">
                <h1 className = "title">Your best weather app</h1>
                <Link to="#">Team</Link>
                <Link to="#">History</Link>
                <Link to="#">Contact</Link>
            </div>
        </div>
        
        <span className= "spanStyle" onClick={openNav}> &#8801; </span>
    </div>
);

const openNav = () => {
    document.getElementById("mySidenav").classList.replace('sidebar__sidenav','sidenav__expand');
}

const closeNav = (e) => {
    e.preventDefault();
    document.getElementById("mySidenav").classList.replace('sidenav__expand', 'sidebar__sidenav');
}

const test = () => console.log('testing');


export default Sidebar;