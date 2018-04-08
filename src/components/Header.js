import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => (
    <div className="header">
        <Link to = "/"><img src="/images/umbrella.png"/> </Link>
    </div>
);

export default Header;