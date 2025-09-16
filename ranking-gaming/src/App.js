import React, { useState } from 'react';
import './App.css'; // Opcional, para estilos gerais
import Header from './components/Header';
import Ranking from './components/Ranking';
import Edicao from './components/Edicao';

function App() {
  const [currentPage, setCurrentPage] = useState('ranking');

  const renderContent = () => {
    if (currentPage === 'ranking') {
      return <Ranking />;
    } else if (currentPage === 'edicao') {
      return <Edicao />;
    }
    return null;
  };

  return (
    <div className="App">
      <Header onNavigate={setCurrentPage} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;