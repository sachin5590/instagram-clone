import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/activity">Activity</Link></li>
            <li><Link to="/account/login">Login</Link></li>
            <li><Link to="/account/register">Register</Link></li>
        </ul>
    );
}
export default Header;
