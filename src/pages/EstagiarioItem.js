import React from 'react';

/* Exibe informações do estagiário em uma linha da tabela */
const EstagiarioItem = ({ estagiario }) => {
  return (
    <tr>
      <td>{estagiario.nome}</td>
      <td>{estagiario.area}</td>
      <td>{estagiario.turno}</td>
      <td>{estagiario.horario}</td>
    </tr>
  );
};

export default EstagiarioItem;