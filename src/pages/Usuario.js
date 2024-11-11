import '../styles/index.css';
import Sidebar from '../componentes/sidebar.js';
import Header from '../componentes/Header.js';
import '../styles/usuario.css'; 
import '../styles/estagiario.css';
import perfil from '../imagens/perfil.png';

const Usuario = () => {
  return (
  
      <div className="row">
        <Sidebar />
        <div className="col cadastro">
          <Header />
          <div className="cadastro-dois">
          <div>
            <h3 id="titulo-dois">Editar Perfil de funcionário</h3>
            <div className="img-perfil">
              <img src={perfil} alt="Foto de Perfil"/>
              <p className="m-0">Foto de Perfil</p>
            </div>
          </div>


          <div className="row">

            <li className="lista-form col-md-6 col-sm-12">
              <span>Nome</span>
              <input type="text"/>
            </li>

            <li className="lista-form col-md-6 col-sm-12">
              <span>Sobrenome</span>
              <input type="text"/>
            </li>

            <li className="lista-form col-md-6 col-sm-12">
              <span>Email</span>
              <input type="email"/>
            </li>

            <li className="lista-form col-md-6 col-sm-12">
              <span>Data de nascimento</span>
              <input type="date"/>
            </li>

            <li className="lista-form col-md-6 col-sm-12">
              <span>Celular</span>
              <input type="text"/>
            </li>

            <li className="lista-form col-md-6 col-sm-12">
              <span>Função</span>
              <input type="text"/>
            </li>
          </div>

          <button id="botao-salvar">Salvar</button>
        </div>
      </div>
  
          </div>
    
    
  );
};

export default Usuario;
