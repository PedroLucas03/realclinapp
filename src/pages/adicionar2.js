import React, { useState } from 'react';
import Sidebar from '../componentes/sidebar';
import Header from '../componentes/Header';
import '../styles/usuario.css';

// Constantes para textos fixos
const TITLE = "Adicionar Estagiário";
const BUTTON_TEXT = "Salvar";

// Componente para adicionar um estagiário
const AdicionarEstagiario = ({ adicionarEstagiario }) => {
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [turno, setTurno] = useState('');
  const [horario, setHorario] = useState('');

  // Padrão Command: encapsula a ação de adicionar um estagiário
  const adicionarEstagiarioCommand = () => {
    const novoEstagiario = { nome, area, turno, horario };
    adicionarEstagiario(novoEstagiario);
    resetForm();
  };

  // Reseta os campos do formulário
  const resetForm = () => {
    setNome('');
    setArea('');
    setTurno('');
    setHorario('');
  };

  // Lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarEstagiarioCommand();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col cadastro">
          <Header />
          <div className="cadastro-dois">
            <h3 id="titulo-dois">{TITLE}</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <FormField
                  label="Nome"
                  value={nome}
                  onChange={setNome}
                  type="text"
                />
                <FormField
                  label="Área"
                  value={area}
                  onChange={setArea}
                  type="text"
                />
                <FormField
                  label="Turno Disponível"
                  value={turno}
                  onChange={setTurno}
                  type="text"
                />
                <FormField
                  label="Horário Disponível"
                  value={horario}
                  onChange={setHorario}
                  type="text"
                />
              </div>
              <button id="botao-salvar" type="submit">
                {BUTTON_TEXT}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente reutilizável para campos de formulário
const FormField = ({ label, value, onChange, type }) => (
  <li className="lista-form col-md-6 col-sm-12">
    <span>{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  </li>
);

export default AdicionarEstagiario;
