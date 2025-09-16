import React from 'react';

const mockRankingData = [
  { id: 1, nome: 'Ana Silva', total: 95 },
  { id: 2, nome: 'Bruno Santos', total: 88 },
  { id: 3, nome: 'Carla Oliveira', total: 76 },
];

function Ranking() {
  return (
    <div style={containerStyle}>
      <h2>Ranking Mensal</h2>
      <div style={filtersStyle}>
        <span>Mês:</span>
        <select>
          <option>Setembro</option>
          <option>Agosto</option>
        </select>
        <span>Ano:</span>
        <select>
          <option>2025</option>
        </select>
      </div>
      <ul style={listStyle}>
        {mockRankingData.map((colaborador, index) => (
          <li key={colaborador.id} style={itemStyle}>
            <span style={positionStyle}>{index + 1}º</span>
            <span>{colaborador.nome}</span>
            <span>{colaborador.total} pontos</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle = { padding: '20px' };
const filtersStyle = { marginBottom: '20px' };
const listStyle = { listStyleType: 'none', padding: 0 };
const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: '1px solid #eee',
};
const positionStyle = { fontWeight: 'bold' };

export default Ranking;