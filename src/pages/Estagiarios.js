import React, { useState, useEffect } from 'react';
import Sidebar from '../componentes/sidebar';
import Header from '../componentes/Header';
import '../styles/estagiario.css';
import AdicionarEstagiario from './adicionar2';
import EstagiariosList from './EstagiariosList';

const Estagiarios = () => {
  const [estagiarios, setEstagiarios] = useState([
    { nome: 'Jorge', area: 'Psicologia', turno: 'Tarde', horario: '10:00 ás 16:00' },
    { nome: 'Eduardo', area: 'Fisioterapia', turno: 'Manhã', horario: '8:00 ás 14:00' },
  ]);
  const [showForm, setShowForm] = useState(false);

  // Carrega estagiários armazenados localmente ao montar o componente
  useEffect(() => {
    const storedEstagiarios = localStorage.getItem('estagiarios');
    if (storedEstagiarios) {
      setEstagiarios(JSON.parse(storedEstagiarios));
    }
  }, []);

  // Armazena estagiários no localStorage sempre que a lista é alterada
  useEffect(() => {
    localStorage.setItem('estagiarios', JSON.stringify(estagiarios));
  }, [estagiarios]);

  // Adiciona um novo estagiário e fecha o formulário
  const adicionarEstagiario = (novoEstagiario) => {
    setEstagiarios([...estagiarios, novoEstagiario]);
    setShowForm(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col cadastro">
          <Header />
          {!showForm ? (
            <>
              <div className="d-flex align-items-center search-users">
                <h3 className="p-3 m-0">Estagiários</h3>
                <div className="position-relative">
                  <input type="text" className="custom-input border border-1 rounded-5 ps-2 pe-4" />
                  <i className="fas fa-search position-absolute search-icon"></i>
                </div>
              </div>
              <EstagiariosList estagiarios={estagiarios} />
              <button
                className="rounded-2"
                id="custom-btn"
                onClick={() => setShowForm(true)}
              >
                Adicionar
              </button>
            </>
          ) : (
            <AdicionarEstagiario adicionarEstagiario={adicionarEstagiario} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Estagiarios;
