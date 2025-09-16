import React, { useState } from 'react';

function Edicao() {
  const [formData, setFormData] = useState({
    nome: '',
    batidasCertas: 0,
    atrasos5min: 0,
    atrasosMais5min: 0,
    // ... adicione os outros campos aqui
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleStepperChange = (name, delta) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: Math.max(0, prevData[name] + delta) // Garante que o mínimo seja 0
    }));
  };

  const calcularPontos = () => {
    const pontosPontualidade = (formData.batidasCertas * 2) + (formData.atrasos5min * -1) + (formData.atrasosMais5min * -3);
    return Math.max(0, Math.min(40, pontosPontualidade));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lançamento de Dados</h2>
      <form>
        <div>
          <label>Nome do Colaborador:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
        </div>

        <h3>Pontualidade</h3>
        <div>
          <label>Batidas certas:</label>
          <input type="number" name="batidasCertas" value={formData.batidasCertas} onChange={handleInputChange} />
          {/* Stepper buttons could be here */}
        </div>
        {/* Adicione os outros campos de entrada para todas as categorias aqui */}
        
        <h3>Pontuação</h3>
        <p>Pontualidade: {calcularPontos()} pontos</p>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Edicao;