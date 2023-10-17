import React, { useState } from 'react';

function Formulario() {
  const [dados, setDados] = useState({
    peso: '',
    estatura: '',
    pc: '',
    temperatura: '',
    fr: '',
    estadoGeral: '',
    estadoPele: '',
    krammerZone: '',
    milliumSebaceo: 'Não',
    hemangioma: 'Não',
    manchaMongolica: 'Não',
    eritemaToxico: 'Não',
    fontenelas: 'Abauladas',
    bossa: 'Não',
    cefalohematoma: 'Não',
    linfonodosCervicais: 'Não',
    faceSimetria: 'Simétrica',
    aparenciaSindromica: 'Não',
    malformacaoFace: 'Não',
    olhosSimetria: 'Simétricos',
    olhosSecrecao: 'Não',
    olhosEstrabismo: 'Não',
    esclera: 'Anictérica',
    pupilas: 'Isocóricas',
    narizSecrecao: 'Não',
    narizBatimentos: 'Não',
    narizObstrucao: 'Não',
    palatoIntegro: 'Sim',
    fendaLabial: 'Não',
    tamanhoLingua: 'Normal',
    freioLingual: 'Normal',
    mucosaCor: 'Corada',
    mucosaPálida: 'Não',
    mucosaIctérica: 'Não',
    mucosaCianótica: 'Não',
    mucosaAcianótica: 'Não',
    mucosaÚmida: 'Não',
    mucosaSeca: 'Não',
    ouvidosSecrecao: 'Não',
    linfonodoRetroauricular: 'Não',
    torcicoloCongenito: 'Não',
    toraxSimetria: 'Simétrico',
    toraxDeformidades: 'Não',
    linfonodoSupraclavicular: 'Não',
    linfonodoAxilar: 'Não',
    brotoMamario: 'Não',
    auscultaPulmonarTiragem: 'Não',
    auscultaPulmonarRetração: 'Não',
    auscultaPulmonarGemidos: 'Não',
    auscultaPulmonarEstridor: 'Não',
    auscultaPulmonarSinaisEsforco: 'Não',
    auscultaCardiacaSopro: 'Não',
    abdomenDilatado: 'Não',
    abdomenEscavado: 'Não',
    abdomenGloboso: 'Não',
    herniaUmbilical: 'Não',
    ruidosHidroaereos: 'Não',
    cotoUmbilical: 'Não',
    cotoUmbilicalSecrecao: 'Não',
    cotoUmbilicalHiperemia: 'Não',
    cotoUmbilicalOdor: 'Não',
    cotoUmbilicalGranuloma: 'Não',
    cotoUmbilicalDorPalpacao: 'Não',
    membrosSuperioresDeformidades: 'Não',
    membrosSuperioresMalformacao: 'Não',
    membrosSuperioresLinhaPalmar: 'Não',
    membrosInferioresDeformidades: 'Não',
    membrosInferioresMalformacao: 'Não',
    membrosInferioresPéTorto: 'Não',
    membrosInferioresPolidactilia: 'Não',
    genitaliaFemininaLábiosClitóris: 'Não',
    genitaliaFemininaSecrecao: 'Não',
    genitaliaFemininaSinequia: 'Não',
    genitaliaFemininaHerniaInguinal: 'Não',
    genitaliaMasculinaHerniaInguinal: 'Não',
    genitaliaMasculinaHidrocele: 'Não',
    genitaliaMasculinaFimoseFisiologica: 'Não',
    genitaliaMasculinaTesticulos: 'Não',
    genitaliaMasculinaMeatoUrinario: 'Não',
    genitaliaMasculinaOrificioVisualizado: 'Não',
    genitaliaMasculinaHipospadia: 'Não',
    genitaliaMasculinaEpispadia: 'Não',
    orificioAnalAnomalias: 'Não',
    orificioAnalFissuras: 'Não',
    orificioAnalAssaduras: 'Não',
    reflexosBusca: 'Não',
    reflexosSucção: 'Não',
    reflexosMoro: 'Não',
    reflexosBabinski: 'Não',
    reflexosPreensaoPalmar: 'Não',
    reflexosPreensaoPlantar: 'Não',
    reflexosMarcha: 'Não',
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
      <div>
        <h2>Anamnese</h2>
        <p>Questões a serem respondidas</p>
      </div>
      <div>
        <h3>Identificação do Recém Nascido</h3>
        <label>Peso (Kg):</label>
        <input
          type="text"
          name="peso"
          value={dados.peso}
          onChange={handleChange}
        />
        <label>Estatura (Cm):</label>
        <input
          type="text"
          name="estatura"
          value={dados.estatura}
          onChange={handleChange}
        />
        <label>PC (cm):</label>
        <input
          type="text"
          name="pc"
          value={dados.pc}
          onChange={handleChange}
        />
        <label>Temperatura axilar (ºC):</label>
        <input
          type="text"
          name="temperatura"
          value={dados.temperatura}
          onChange={handleChange}
        />
        <label>FR (RPM):</label>
        <input
          type="text"
          name="fr"
          value={dados.fr}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Estado Geral</h3>
        <label>Ativo</label>
        <input
          type="radio"
          name="estadoGeral"
          value="Ativo"
          onChange={handleChange}
          checked={dados.estadoGeral === 'Ativo'}
        />
        <label>Hipoativo</label>
        <input
          type="radio"
          name="estadoGeral"
          value="Hipoativo"
          onChange={handleChange}
          checked={dados.estadoGeral === 'Hipoativo'}
        />
        <label>Letárgico</label>
        <input
          type="radio"
          name="estadoGeral"
          value="Letárgico"
          onChange={handleChange}
          checked={dados.estadoGeral === 'Letárgico'}
        />
        <label>Calmo</label>
        <input
          type="radio"
          name="estadoGeral"
          value="Calmo"
          onChange={handleChange}
          checked={dados.estadoGeral === 'Calmo'}
        />
        <label>Choroso</label>
        <input
          type="radio"
          name="estadoGeral"
          value="Choroso"
          onChange={handleChange}
          checked={dados.estadoGeral === 'Choroso'}
        />
      </div>
      <div>
        <h3>Estado da Pele</h3>
        <label>Lisa</label>
        <input
          type="radio"
          name="estadoPele"
          value="Lisa"
          onChange={handleChange}
          checked={dados.estadoPele === 'Lisa'}
        />
        <label>Irregular</label>
        <input
          type="radio"
          name="estadoPele"
          value="Irregular"
          onChange={handleChange}
          checked={dados.estadoPele === 'Irregular'}
        />
        <label>Macia</label>
        <input
          type="radio"
          name="estadoPele"
          value="Macia"
          onChange={handleChange}
          checked={dados.estadoPele === 'Macia'}
        />
        <label>Áspera</label>
        <input
          type="radio"
          name="estadoPele"
          value="Áspera"
          onChange={handleChange}
          checked={dados.estadoPele === 'Áspera'}
        />
        <label>Rósea</label>
        <input
          type="radio"
          name="estadoPele"
          value="Rósea"
          onChange={handleChange}
          checked={dados.estadoPele === 'Rósea'}
        />
        <label>Pálida</label>
        <input
          type="radio"
          name="estadoPele"
          value="Pálida"
          onChange={handleChange}
          checked={dados.estadoPele === 'Pálida'}
        />
        <label>Cianótica</label>
        <input
          type="radio"
          name="estadoPele"
          value="Cianótica"
          onChange={handleChange}
          checked={dados.estadoPele === 'Cianótica'}
        />
        <label>Ictérica</label>
        <input
          type="radio"
          name="estadoPele"
          value="Ictérica"
          onChange={handleChange}
          checked={dados.estadoPele === 'Ictérica'}
        />
        <label>Hidratada</label>
        <input
          type="radio"
          name="estadoPele"
          value="Hidratada"
          onChange={handleChange}
          checked={dados.estadoPele === 'Hidratada'}
        />
        <label>Desidratada</label>
        <input
          type="radio"
          name="estadoPele"
          value="Desidratada"
          onChange={handleChange}
          checked={dados.estadoPele === 'Desidratada'}
        />
      </div>
      <div>
        <h3>Krammer Zone</h3>
        <select name="krammerZone" value={dados.krammerZone} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <h3>Millium Sebáceo</h3>
        <label>Sim</label>
        <input
          type="radio"
          name="milliumSebaceo"
          value="Sim"
          onChange={handleChange}
          checked={dados.milliumSebaceo === 'Sim'}
        />
        <label>Não</label>
        <input
          type="radio"
          name="milliumSebaceo"
          value="Não"
          onChange={handleChange}
          checked={dados.milliumSebaceo === 'Não'}
        />
      </div>
      <div>
        <h3>Hemangioma</h3>
        <label>Sim</label>
        <input
          type="radio"
          name="hemangioma"
          value="Sim"
          onChange={handleChange}
          checked={dados.hemangioma === 'Sim'}
        />
        <label>Não</label>
        <input
          type="radio"
          name="hemangioma"
          value="Não"
          onChange={handleChange}
          checked={dados.hemangioma === 'Não'}
        />
      </div>
      <div>
        <h3>Mancha Mongólica</h3>
        <label>Sim</label>
        <input
          type="radio"
          name="manchaMongolica"
          value="Sim"
          onChange={handleChange}
          checked={dados.manchaMongolica === 'Sim'}
        />
        <label>Não</label>
        <input
          type="radio"
          name="manchaMongolica"
          value="Não"
          onChange={handleChange}
          checked={dados.manchaMongolica === 'Não'}
        />
      </div>
      <div>
        <h3>Eritema Tóxico</h3>
        <label>Sim</label>
        <input
          type="radio"
          name="eritemaToxico"
          value="Sim"
          onChange={handleChange}
          checked={dados.eritemaToxico === 'Sim'}
        />
        <label>Não</label>
        <input
          type="radio"
          name="eritemaToxico"
          value="Não"
          onChange={handleChange}
          checked={dados.eritemaToxico === 'Não'}
        />
      </div>
      <div>
        <h3>Cabeça</h3>
        <label>Fontenelas:</label>
        <select name="fontenelas" value={dados.fontenelas} onChange={handleChange}>
          <option value="Abauladas">Abauladas</option>
          <option value="Deprimidas">Deprimidas</option>
          <option value="Planas">Planas</option>
        </select>
        <label>Bossa Serossanguinolenta</label>
        <input
          type="radio"
          name="bossa"
          value="Sim"
          onChange={handleChange}
          checked={dados.bossa === 'Sim'}
        />
        <label>Não</label>
        <input
          type="radio"
          name="bossa"
          value="Não"
          onChange={handleChange}
          checked={dados.bossa === 'Não'}
        />
        <label>Cefalohematoma</label>
        <input
          type="radio"
          name="cefalohematoma"
          value="Sim"
          onChange={handleChange}
          checked={dados.cefalohematoma === 'Sim'}
        />
        <label>Não</label>
        <input
          type="radio"
          name="cefalohematoma"
          value="Não"
          onChange={handleChange}
          checked={dados.cefalohematoma === 'Não'}
        />
      </div>
      {/* ... Continua com os outros campos */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
