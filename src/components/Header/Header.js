import React from 'react';

import {
  Link
} from 'react-router-dom';
import Menu from './Menu';
import Logo from './Logo'


function Header() {
  return (
    <div>
      <Logo />
      <Menu>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/week">Week schedule</Link></li>
          <li><Link to="/recipes">All recipes</Link></li>
          <li><Link to="/recipes/favorite">Favorite recipes</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </Menu>
    </div>
  );
}

export default Header;