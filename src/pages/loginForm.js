import React from 'react';
import '../styles/index.css';
import '../styles/loginForm.css';
import logo from '../imagens/logo.png'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <body>
    <main className="d-flex h-100">
      <form className="formulario">
        <img src={logo} alt="Logotipo Real Clin" className="mobile-logo" />
        <h1>Entrar</h1>
        <input type="email" placeholder="Email" className='input-login' />
        <input type="password" placeholder="Senha" className='input-login' />
        <a href="#" className="link-dois">Esqueci minha senha</a>
        <Link to='/Usuario' className="botao-entrar">Entrar</Link>
        <div className="paragrafo">
          <p className="m-0">Não tem uma conta?</p>
          <a href="#">Cadastrar</a>
        </div>
      </form>
      <div className="logo">
        <img src={logo} alt="Logotipo Real Clin" />
      </div>
    </main>
    </body>
  );
};

export default LoginForm;