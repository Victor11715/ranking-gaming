import React from 'react';

function Header({ onNavigate }) {
  return (
    <header style={headerStyle}>
      <button onClick={() => onNavigate('ranking')}>Ranking</button>
      <button onClick={() => onNavigate('edicao')}>Edição</button>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderBottom: '1px solid #ccc',
};

export default Header;