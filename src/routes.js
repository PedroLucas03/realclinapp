import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from './pages/loginForm';
import Estagiarios from './pages/Estagiarios';
import Prontuario from './pages/Prontuarios';
import Usuario from './pages/Usuario';
import Agenda from './pages/Agenda';



function RoutesApp() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/Estagiario" element={<Estagiarios />} />
                <Route path="/Prontuario" element={<Prontuario />} />
                <Route path="/Usuario" element={<Usuario />} />
                <Route path="/Agenda" element={<Agenda />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;