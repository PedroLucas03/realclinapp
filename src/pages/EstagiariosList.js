// EstagiariosList.js
import React from 'react';
import EstagiarioItem from './EstagiarioItem';

const EstagiariosList = ({ estagiarios }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="cor">
          <th scope="col">Nome</th>
          <th scope="col">Área</th>
          <th scope="col">Turno Disponível</th>
          <th scope="col">Horário Disponível</th>
        </tr>
      </thead>
      <tbody>
        {estagiarios.map((estagiario, index) => (
          <EstagiarioItem key={index} estagiario={estagiario} />
        ))}
      </tbody>
    </table>
  );
};

export default EstagiariosList;