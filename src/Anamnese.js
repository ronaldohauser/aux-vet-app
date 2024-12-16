import React, { useState } from 'react';
import './Anamnese.css';
import { jsPDF } from 'jspdf';

const Anamnese = () => {
  const [formData, setFormData] = useState({
    // Dados do responsável
    nomeResponsavel: '',
    cpf: '',
    endereco: '',
    cidade: '',
    uf: '',
    telefoneFixo: '',
    celular: '',

    // Identificação do animal
    nomeAnimal: '',
    especie: '',
    raca: '',
    sexo: '',
    idade: '',
    peso: '',
    pelagem: '',
    procedencia: '',

    // Anamnese Geral
    queixaPrincipal: '',
    historicoMedico: '',
    alimentacao: '',
    vacinacao: '',
    vermifugacao: '',
    ambiente: '',

    // Anamnese Especial
    respiratorio: '',
    cardiovascular: '',
    digestorio: '',
    urinario: '',
    reprodutor: '',
    locomotor: '',
    neurologico: '',
    olhos: '',

    // Exame Físico
    postura: '',
    nivelConsciencia: '',
    escoreCorporal: '',
    tr: '',
    fc: '',
    tpc: '',
    pulso: '',
    hidratacao: '',
    linfonodos: {
      submandibulares: '',
      preEscapulares: '',
      popliteos: '',
      inguinais: ''
    },
    mucosas: {
      ocular: '',
      oral: '',
      peniana: '',
      vulvar: '',
      anal: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('.');

    if (nameParts.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    } else if (nameParts.length === 2) {
      const [group, field] = nameParts;
      setFormData((prevData) => ({
        ...prevData,
        [group]: {
          ...prevData[group],
          [field]: value
        }
      }));
    }
  };

  // Função para gerar e baixar o PDF
  const handleSavePdf = () => {
    const doc = new jsPDF();

    // Adiciona o conteúdo ao PDF
    doc.text(`Ficha de Atendimento Clínico de Pequenos Animais`, 10, 10);
    doc.text(`Nome do Responsável: ${formData.nomeResponsavel}`, 10, 20);
    doc.text(`CPF: ${formData.cpf}`, 10, 30);
    doc.text(`Endereço: ${formData.endereco}`, 10, 40);
    doc.text(`Cidade: ${formData.cidade}`, 10, 50);
    doc.text(`UF: ${formData.uf}`, 10, 60);
    doc.text(`Telefone Fixo: ${formData.telefoneFixo}`, 10, 70);
    doc.text(`Celular: ${formData.celular}`, 10, 80);

    // Identificação do animal
    doc.text(`Nome do Animal: ${formData.nomeAnimal}`, 10, 90);
    doc.text(`Espécie: ${formData.especie}`, 10, 100);
    doc.text(`Raça: ${formData.raca}`, 10, 110);
    doc.text(`Sexo: ${formData.sexo}`, 10, 120);
    doc.text(`Idade: ${formData.idade}`, 10, 130);
    doc.text(`Peso: ${formData.peso}`, 10, 140);

    // Anamnese Geral
    doc.text(`Queixa Principal: ${formData.queixaPrincipal}`, 10, 150);
    doc.text(`Histórico Médico: ${formData.historicoMedico}`, 10, 160);
    doc.text(`Alimentação: ${formData.alimentacao}`, 10, 170);
    doc.text(`Vacinação: ${formData.vacinacao}`, 10, 180);
    doc.text(`Vermifugação: ${formData.vermifugacao}`, 10, 190);
    doc.text(`Ambiente: ${formData.ambiente}`, 10, 200);

    // Anamnese Especial
    doc.text(`Respiratório: ${formData.respiratorio}`, 10, 210);
    doc.text(`Cardiovascular: ${formData.cardioVascular}`, 10, 220);
    doc.text(`Digestório: ${formData.digestorio}`, 10, 230);
    doc.text(`Urinário: ${formData.urinario}`, 10, 240);
    doc.text(`Reprodutor: ${formData.reprodutor}`, 10, 250);
    doc.text(`Locomotor: ${formData.locomotor}`, 10, 260);
    doc.text(`Neurológico: ${formData.neurologico}`, 10, 270);
    doc.text(`Olhos: ${formData.olhos}`, 10, 280);

    // Exame Físico
    doc.text(`Postura: ${formData.postura}`, 10, 290);
    doc.text(`Nível de Consciência: ${formData.nivelConsciencia}`, 10, 300);
    doc.text(`Escore Corporal: ${formData.escoreCorporal}`, 10, 310);
    doc.text(`Temperatura Retal (TR): ${formData.tr}`, 10, 320);
    doc.text(`Frequência Cardíaca (FC): ${formData.fc}`, 10, 330);
    doc.text(`Tempo de Preenchimento Capilar (TPC): ${formData.tpc}`, 10, 340);
    doc.text(`Pulso: ${formData.pulso}`, 10, 350);
    doc.text(`Hidratação: ${formData.hidratacao}`, 10, 360);

    // Linfonodos
    doc.text(`Linfonodos Submandibulares: ${formData.linfonodos.submandibulares}`, 10, 370);
    doc.text(`Linfonodos Pré-Escapulares: ${formData.linfonodos.preEscapulares}`, 10, 380);
    doc.text(`Linfonodos Poplíteos: ${formData.linfonodos.popliteos}`, 10, 390);
    doc.text(`Linfonodos Inguinais: ${formData.linfonodos.inguinais}`, 10, 400);

    // Mucosas
    doc.text(`Mucosas Ocular: ${formData.mucosas.ocular}`, 10, 410);
    doc.text(`Mucosas Oral: ${formData.mucosas.oral}`, 10, 420);
    doc.text(`Mucosas Peniana: ${formData.mucosas.peniana}`, 10, 430);
    doc.text(`Mucosas Vulvar: ${formData.mucosas.vulvar}`, 10, 440);
    doc.text(`Mucosas Anal: ${formData.mucosas.anal}`, 10, 450);

    // Salva o PDF
    doc.save('anamnese.pdf');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSavePdf();
  };

  return (
    <form className="anamnese-form" onSubmit={handleSubmit}>
      <h1>Ficha de Atendimento Clínico de Pequenos Animais</h1>
      <h2>Dados do Responsável</h2>
      <label>
        Nome Completo:
        <input type="text" name="nomeResponsavel" value={formData.nomeResponsavel} onChange={handleChange} />
      </label>
      <label>
        CPF:
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
      </label>
      <label>
        Endereço:
        <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
      </label>
      <label>
        Cidade:
        <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
      </label>
      <label>
        UF:
        <input type="text" name="uf" value={formData.uf} onChange={handleChange} />
      </label>
      <label>
        Telefone Fixo:
        <input type="text" name="telefoneFixo" value={formData.telefoneFixo} onChange={handleChange} />
      </label>
      <label>
        Celular:
        <input type="text" name="celular" value={formData.celular} onChange={handleChange} />
      </label>

      <h2>Dados do aciente</h2>
      <label>
        Nome:
        <input type="text" name="nomeAnimal" value={formData.nomeAnimal} onChange={handleChange} />
      </label>
      <label>
        Espécie:
        <input type="text" name="especie" value={formData.especie} onChange={handleChange} />
      </label>
      <label>
        Raça:
        <input type="text" name="raca" value={formData.raca} onChange={handleChange} />
      </label>
      <label>
        Sexo:
        <input type="text" name="sexo" value={formData.sexo} onChange={handleChange} />
      </label>
      <label>
        Idade:
        <input type="text" name="idade" value={formData.idade} onChange={handleChange} />
      </label>
      <label>
        Peso:
        <input type="text" name="peso" value={formData.peso} onChange={handleChange} />
      </label>
      <label>
        Pelagem:
        <input type="text" name="pelagem" value={formData.pelagem} onChange={handleChange} />
      </label>
      <label>
        Procedência:
        <input type="text" name="procedencia" value={formData.procedencia} onChange={handleChange} />
      </label>

      <h2>Anamnese Geral</h2>
      <label>
        Queixa Principal:
        <textarea name="queixaPrincipal" value={formData.queixaPrincipal} onChange={handleChange} />
      </label>
      <label>
        Histórico Médico:
        <textarea name="historicoMedico" value={formData.historicoMedico} onChange={handleChange} />
      </label>
      <label>
        Alimentação:
        <textarea name="alimentacao" value={formData.alimentacao} onChange={handleChange} />
      </label>
      <label>
        Vacinação:
        <textarea name="vacinacao" value={formData.vacinacao} onChange={handleChange} />
      </label>
      <label>
        Vermifugação:
        <textarea name="vermifugacao" value={formData.vermifugacao} onChange={handleChange} />
      </label>
      <label>
        Ambiente em que vive:
        <textarea name="ambiente" value={formData.ambiente} onChange={handleChange} />
      </label>

      <h2>Anamnese Especial</h2>
      <label>
        Sistema Respiratório:
        <textarea name="respiratorio" value={formData.respiratorio} onChange={handleChange} />
      </label>
      <label>
        Sistema Cardiovascular:
        <textarea name="cardiovascular" value={formData.cardiovascular} onChange={handleChange} />
      </label>
      <label>
        Sistema Digestório:
        <textarea name="digestorio" value={formData.digestorio} onChange={handleChange} />
      </label>
      <label>
        Sistema Urinário:
        <textarea name="urinario" value={formData.urinario} onChange={handleChange} />
      </label>
      <label>
        Sistema Reprodutor:
        <textarea name="reprodutor" value={formData.reprodutor} onChange={handleChange} />
      </label>
      <label>
        Sistema Locomotor:
        <textarea name="locomotor" value={formData.locomotor} onChange={handleChange} />
      </label>
      <label>
        Sistema Neurológico:
        <textarea name="neurologico" value={formData.neurologico} onChange={handleChange} />
      </label>
      <label>
        Olhos:
        <textarea name="olhos" value={formData.olhos} onChange={handleChange} />
      </label>

      <h2>Exame Físico</h2>
      <label>
        Postura:
        <input type="text" name="postura" value={formData.postura} onChange={handleChange} />
      </label>
      <label>
        Nível de Consciência:
        <input type="text" name="nivelConsciencia" value={formData.nivelConsciencia} onChange={handleChange} />
      </label>
      <label>
        Escore Corporal:
        <input type="text" name="escoreCorporal" value={formData.escoreCorporal} onChange={handleChange} />
      </label>
      <label>
        TR (Temperatura Retal):
        <input type="text" name="tr" value={formData.tr} onChange={handleChange} />
      </label>
      <label>
        FC (Frequência Cardíaca - batimentos por minuto):
        <input type="text" name="fc" value={formData.fc} onChange={handleChange} />
      </label>
      <label>
        TPC (Tempo de Preenchimento Capilar - segundos):
        <input type="text" name="tpc" value={formData.tpc} onChange={handleChange} />
      </label>
      <label>
        Pulso (por minuto):
        <input type="text" name="pulso" value={formData.pulso} onChange={handleChange} />
      </label>
      <label>
        Hidratação:
        <input type="text" name="hidratacao" value={formData.hidratacao} onChange={handleChange} />
      </label>
      <label>
        Linfonodos Submandibulares:
        <input type="text" name="linfonodos.submandibulares" value={formData.linfonodos.submandibulares} onChange={handleChange} />
      </label>

      {}

      <button type="submit">Gerar PDF</button>
    </form>
  );
};

export default Anamnese;
