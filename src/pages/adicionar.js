
import React, { useState } from 'react';
import Sidebar from '../componentes/sidebar';
import Header from '../componentes/Header';
import '../styles/usuario.css';

// Função de Fábrica para criar um novo prontuário
const createProntuario = (nome, numero, status, data) => ({
  nome,
  numero,
  status,
  data,
});

const Adicionar = ({ adicionarProntuario }) => {
  // Estado para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState('');

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Utiliza a função de fábrica para criar um novo prontuário
    const novoProntuario = createProntuario(nome, numero, status, data);

    // Envia o prontuário criado para a função passar o dado para o pai (ou outro componente)
    adicionarProntuario(novoProntuario);

    // Limpa os campos do formulário após a submissão
    setNome('');
    setNumero('');
    setStatus('');
    setData('');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col cadastro">
          <Header />
          <div className="cadastro-dois">
            <div>
              <h3 id="titulo-dois">Adicionar Prontuario</h3>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <li className="lista-form col-md-6 col-sm-12">
                  <span>Nome</span>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Nº Prontuario</span>
                  <input
                    type="text"
                    name="numero"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Status</span>
                  <input
                    type="text"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  />
                </li>

                <li className="lista-form col-md-6 col-sm-12">
                  <span>Data</span>
                  <input
                    type="date"
                    name="data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                  />
                </li>
              </div>

              <button id="botao-salvar" type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adicionar;