import { NavLink } from 'react-router-dom';
import '../style/_header.scss'
import React from 'react'
const  Header: React.FC = () => {
    return (
        <div className="header">
            <ul className="nav">
                <li><NavLink to="/" exact>List User</NavLink></li>
                <li><NavLink to="/counter" exact>Counter</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;