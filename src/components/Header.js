import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';



const Header = () => (
    <div>
        <Sidebar />
        <div className="header">
            <Link to = "/">
                <svg className="header__icon">
                    <use xlinkHref="images/sprite.svg#icon-umbrella"/>
                </svg>
            </Link>
        </div>
    </div>
);

export default Header;