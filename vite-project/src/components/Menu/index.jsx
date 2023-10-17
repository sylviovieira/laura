import React from "react";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav id="menu">
            <h1>Menu Principal</h1>
            <ul>
                <li><Link to="/rn">Recém-nascido</Link></li>
                <li><Link to="/ummes">Primeiro Mês</Link></li>
                <li><Link to="/doismeses">2 - 3 Meses</Link></li>
                {/* ... adicione todos os outros links aqui ... */}
            </ul>
        </nav>
    )
}

export default Menu;
