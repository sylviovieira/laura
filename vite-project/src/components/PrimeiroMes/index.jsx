import React, { useState } from 'react';

function Formulario() {
  const [dados, setDados] = useState({
    ID: 'RN',
    peso: '',
    estatura: '',
    pc: '',
    tempaux: '',
    fr: '',
    estgeral: 'Ativo',
    estpele: 'Lisa',
    krammer: '1',
    millium: 'nao',
    hemangioma: 'nao',
    mancham: 'nao',
    eritema: 'nao',
    fontenelas: 'abauladas',
    bossa: 'nao',
    cefalo: 'nao',
    linfonodos: 'nao',
    facesimetria: 'simetrica',
    facesindromica: 'nao',
    malf: 'nao',
    defo: 'nao',
    olhossimetria: 'simetrico',
    osecrecao: 'nao',
    estrabismo: 'nao',
    esclera: 'anicterica',
    pupilas: 'isocoricas',
    nsecrecao: 'nao',
    nasas: 'nao',
    obstrucao: 'nao',
    palato: 'sim',
    fendalabial: 'nao',
    tlingua: 'normal',
    flingua: 'normal',
    mucosacor: 'corada',
    mucosaict: 'ancterica',
    mucosacia: 'acianotica',
    mucosaumida: 'umida',
    oosecrecao: 'nao',
    linfoouvido: 'nao',
    torcicolo: 'nao',
    toraxsimetria: 'simetrico',
    toraxdeformidade: 'nao',
    linfonodosupraclavicular: 'nao',
    linfonodoaxilar: 'nao',
    brotomamario: 'nao',
    auscultapul: 'nao',
    retxif: 'nao',
    gemido: 'nao',
    estridor: 'nao',
    esfresp: 'nao',
    auscultacar: 'semsopro',
    abdome: 'dilatado',
    herniaumb: 'nao',
    ruidos: 'ausentes',
    cotoumb: 'mumificado',
    secrecaoumb: 'nao',
    hiperemia: 'nao',
    odor: 'nao',
    granuloma: 'nao',
    palpacao: 'nao',
    msdef: 'nao',
    msmalf: 'nao',
    mslinhapalmar: 'nao',
    midef: 'nao',
    mimalf: 'nao',
    petorto: 'nao',
    polidactilia: 'nao',
    gflabios: 'nao',
    gfsecrecao: 'nao',
    gfsinequia: 'nao',
    gfhernia: 'nao',
    gmhernia: 'nao',
    gmhidrocele: 'nao',
    gmfimose: 'nao',
    gmtesticulos: 'criptorquidia',
    gmmeato: 'nvisualizado',
    oaanomalias: 'nao',
    oafissuras: 'nao',
    oaassaduras: 'nao',
    rbusca: 'ausente',
    rsuccao: 'ausente',
    rmoro: 'ausente',
    rbabinski: 'ausente',
    rppalmar: 'ausente',
    rpplantar: 'ausente',
    rmarcha: 'ausente',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para o servidor ou realizar qualquer ação desejada com os dados do formulário.
    console.log(dados);
  };

  return (
    <form method="post" id="dados" onSubmit={handleSubmit}>
      <fieldset>
        <div>
          <h2>Identificação do Recém Nascido</h2>
        </div>
        <div>
          <input name="ID" value={dados.ID} hidden="True" />
          <label>Peso (Kg):</label>
          <input
            type="number"
            step="0.0010"
            size="4"
            maxLength="4"
            min="0"
            max="9.999"
            name="peso"
            value={dados.peso}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estatura (cm):</label>
          <input
            type="number"
            step="0.0010"
            size="4"
            maxLength="4"
            min="0"
            max="9999"
            name="estatura"
            value={dados.estatura}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Perímetro Cefálico (cm):</label>
          <input
            type="number"
            step="0.0010"
            size="4"
            maxLength="4"
            min="0"
            max="9999"
            name="pc"
            value={dados.pc}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Temp. Axilar (°C):</label>
          <input
            type="number"
            step="0.0010"
            size="4"
            maxLength="4"
            min="25"
            max="43"
            name="tempaux"
            value={dados.tempaux}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>FC (bpm):</label>
          <input
            type="number"
            step="0.0010"
            size="4"
            maxLength="4"
            min="0"
            max="300"
            name="fr"
            value={dados.fr}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado Geral:</label>
          <select name="estgeral" value={dados.estgeral} onChange={handleChange}>
            <option value="Ativo">Ativo</option>
            <option value="Letárgico">Letárgico</option>
            <option value="Hipotônico">Hipotônico</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        {/* ... Outros campos do formulário */}
        <div>
          <button type="submit">Enviar</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Formulario;
