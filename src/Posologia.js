import React, { useState } from 'react';
import './Posologia.css';

const Posologia = () => {
  const [peso, setPeso] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [concentracao, setConcentracao] = useState('');
  const [dose, setDose] = useState('');
  const [resultado, setResultado] = useState('');

  // Função para calcular a posologia
  const calcularPosologia = (e) => {
    e.preventDefault();

    // Validar se peso e dosagem estão preenchidos
    if (!peso || !dosagem) {
      alert('Por favor, preencha o peso e a dosagem do medicamento.');
      return;
    }

    // Verifica se ambos Dose e Concentração foram preenchidos
    if (concentracao && dose) {
      alert('Preencha apenas um dos campos: Dose ou Concentração.');
      return;
    }

    let volumeMedicamento;

    // Se a Concentração foi preenchida em %
    if (concentracao) {
      // Convertendo a concentração de % para decimal (ex: 10% -> 0.1)
      const concentracaoDecimal = concentracao / 100;

      // A fórmula é: Volume (mL) = Dose necessária (mg) / (Concentração em decimal * 1000)
      const doseNecessaria = peso * dosagem;  // Dose necessária em mg
      volumeMedicamento = doseNecessaria / (concentracaoDecimal * 1000);  // Concentração em decimal
    } 
    // Se a Dose foi preenchida
    else if (dose) {
      // Se a dose for fornecida diretamente, usamos a fórmula diferente
      volumeMedicamento = dose / (peso * dosagem);
    }

    // Exibe o resultado em mL
    if (volumeMedicamento !== undefined) {
      setResultado(`${volumeMedicamento.toFixed(3)} mL`);
    } else {
      alert('Preencha a concentração ou a dose.');
    }
  };

  return (
    <div className="posologia-container">
      <h2>Calculadora de Posologia</h2>
      <p>Insira os valores para calcular a posologia do medicamento.</p>

      <form onSubmit={calcularPosologia}>
        <div>
          <label>
            Peso do animal (kg):
            <input 
              type="number" 
              id="peso"
              value={peso} 
              onChange={(e) => setPeso(e.target.value)} 
              placeholder="Peso em kg"
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Dosagem do medicamento (mg/kg):
            <input 
              type="number" 
              id="medicamento"
              value={dosagem} 
              onChange={(e) => setDosagem(e.target.value)} 
              placeholder="Dosagem em mg/kg"
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Concentração do medicamento (%):
            <input 
              type="number" 
              id="concentracao"
              value={concentracao} 
              onChange={(e) => setConcentracao(e.target.value)} 
              placeholder="Concentração em %"
            />
          </label>
        </div>
        <div>
          <label>
            Dose do medicamento (mg):
            <input 
              type="number" 
              id="dose"
              value={dose} 
              onChange={(e) => setDose(e.target.value)} 
              placeholder="Dose em mg"
            />
          </label>
        </div>

        <button type="submit">Calcular</button>
      </form>

      {resultado && (
        <div className="dose-result">
          <h3>Resultado: {resultado}</h3>
        </div>
      )}
    </div>
  );
};

export default Posologia;
