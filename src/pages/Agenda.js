import React, { useState } from 'react';
import Sidebar from '../componentes/sidebar';
import Header from '../componentes/Header';
import '../styles/Agenda.css';

const dias = [
  { dia: 1, eventos: ['Angela', 'Pamela'] },
  { dia: 2, eventos: ['Paulo', 'Nicole'] },
  { dia: 3, eventos: ['João', 'Andressa'] },
  { dia: 4, eventos: ['Pedro', 'Ana'] },
  { dia: 5, eventos: ['João', 'Andressa'] },
  { dia: 6, eventos: [] },
  { dia: 7, eventos: [] },
  { dia: 8, eventos: ['Eduardo', 'Gabriel'] },
  { dia: 9, eventos: ['Carlos', 'Alana'] },
  { dia: 10, eventos: ['João', 'Andressa'] },
  { dia: 11, eventos: ['Nicole', 'Felipe'] },
  { dia: 12, eventos: ['Ana', 'Carlos'] },
  { dia: 13, eventos: [] },
  { dia: 14, eventos: [] },
  { dia: 15, eventos: ['João', 'Andressa'] },
  { dia: 16, eventos: ['Pedro', 'Andressa'] },
  { dia: 17, eventos: ['Angela', 'Alana'] },
  { dia: 18, eventos: ['Gabriela', 'Janete'] },
  { dia: 19, eventos: ['Priscila', 'Lucas'] },
  { dia: 20, eventos: [] },
  { dia: 21, eventos: [] },
  { dia: 22, eventos: ['Ana', 'Adriani'] },
  { dia: 23, eventos: ['Natália', 'Jéssica'] },
  { dia: 24, eventos: ['Paula', 'Angela'] },
  { dia: 25, eventos: ['Sabrina', 'Gabriel'] },
  { dia: 26, eventos: ['João', 'Andressa'] },
  { dia: 27, eventos: [] },
  { dia: 28, eventos: [] },
  { dia: 29, eventos: ['Ana Júlia', 'Andressa'] },
  { dia: 30, eventos: ['João', 'Nicole'] },
];

const CalendarDay = ({ day, events }) => {
// Componente que representa um dia no calendário
  return (
    <div className="day d-flex flex-column justify-content-between">
      <span>{day}</span>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {events.map((event, index) => (
          <div key={index} className={`color-${index + 2}`}>{event}</div>
        ))}
      </div>
    </div>
  );
};

const Agenda = () => {
  const [mes, setMes] = useState('Abril de 2024'); // Estado para armazenar o mês atual

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col cadastro">
          <Header />
          <div className="cadastro-dois d-flex flex-column p-2">
            <div className="d-flex justify-content-between mb-3">
              <div className="d-flex align-items-center gap-2">
                <i className="fas fa-angle-left"></i>
                <p className="m-0 text-nowrap">{mes}</p>
                <i className="fas fa-angle-right"></i>
              </div>
              <div className="position-relative">
                <input type="text" className="custom-input border border-1 rounded-5" />
                <i className="fas fa-search position-absolute search-icon"></i>
              </div>
              <button className="custom-btn rounded-2">Adicionar</button>
              <span className="flag">Hoje</span>
            </div>

            <div className="calendar-container rounded-2">
              <div className="title">Sun</div>
              <div className="title">Mon</div>
              <div className="title">Tue</div>
              <div className="title">Wed</div>
              <div className="title">Thu</div>
              <div className="title">Fri</div>
              <div className="title">Sat</div>

              {dias.map(({ dia, eventos }) => (
                <CalendarDay key={dia} day={dia} events={eventos} />
              ))}

              <div className="other-day">1</div>
              <div className="other-day">2</div>
              <div className="other-day">3</div>
              <div className="other-day">4</div>
              <div className="other-day">5</div>
              <div className="other-day">6</div>
              <div className="other-day">7</div>
              <div className="other-day">8</div>
              <div className="other-day">9</div>
              <div className="other-day">10</div>
              <div className="other-day">11</div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Agenda;
