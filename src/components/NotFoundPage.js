import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage =() => (
    <div className = "warning">
        <h2>Oops, something went wrong!</h2>
        <img src="/images/error-404.png"/>
        <Link to = "/">Go Home</Link>
    </div>
);

export default NotFoundPage;