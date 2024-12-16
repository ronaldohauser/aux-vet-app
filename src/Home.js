import React from 'react';
import { FaPills, FaUserMd, FaShieldAlt, FaHeartbeat, FaExchangeAlt, FaBrain, FaVirus } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao App AuxVet</h1>
      <p>Escolha uma das ferramentas abaixo para começar</p>

      <div className="icons-grid">
        <div className="icon-item">
          <Link to="/posologia"> {}
            <FaPills size={80} />
            <p>Posologia</p>
          </Link>
        </div>
        <div className="icon-item">
          <Link to="/anamnese"> {}
            <FaUserMd size={80} />
            <p>Anamnese</p>
          </Link>
        </div>
        <div className="icon-item">
          <FaShieldAlt size={80} />
          <p>Protocolo Vacinal</p>
        </div>
        <div className="icon-item">
          <FaHeartbeat size={80} />
          <p>Score Corporal</p>
        </div>
        <div className="icon-item">
          <FaExchangeAlt size={80} />
          <p>Conversor</p>
        </div>
        <div className="icon-item">
          <FaBrain size={80} />
          <p>Predisposições</p>
        </div>
        <div className="icon-item">
          <FaVirus size={80} />
          <p>Patologias</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
