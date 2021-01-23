import React from 'react';

function Menu({ children }) {
  return (
    <nav className="Menu">
      { children }
    </nav>
  );
}

export default Menu;