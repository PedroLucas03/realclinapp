import React from 'react';
import '../styles/index.css';
import personIcon from '../imagens/person-fill.png';
import calendarIcon from '../imagens/calendar-event-fill.png';
import clipboardIcon from '../imagens/clipboard.png';
import usersIcon from '../imagens/users-solid.svg';
import logo from '../imagens/logo.png';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mobile-header">
      <img src={logo} className="mobile-logo" alt="Logo" />

      <nav>
        <input type="checkbox" id="menu-hamburguer" />
        <label htmlFor="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
        <ul>
          {menuItems.map((item) => (
            <MenuItem key={item.route} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Componente reutilizável para itens do menu
const MenuItem = ({ route, icon, label }) => (
  <li>
    <Link to={route}>
      <img src={icon} alt={label} />
      {label}
    </Link>
  </li>
);

// Dados do menu
const menuItems = [
  { route: '/Usuario', icon: personIcon, label: 'Usuário' },
  { route: '/Agenda', icon: calendarIcon, label: 'Agenda' },
  { route: '/Prontuario', icon: clipboardIcon, label: 'Prontuário' },
  { route: '/Estagiario', icon: usersIcon, label: 'Estagiários' },
];

export default Header;