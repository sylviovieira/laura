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
    console.log(dados);
  };

  return (
    <form method="post" id="dados" onSubmit={handleSubmit}>
      <div>
        <h2>Anamnese</h2>
        <p>Questões a serem respondidas</p>
      </div>
      <div>
        <fieldset>
          <h2>Identificação da criança de Um mês</h2>
            <input name="ID" value={formData.ID} hidden onChange={handleChange} />
            <label> Peso (Kg):</label>
            <input type="number" step="0.0010" size="4" maxLength="4" min="0" max="15" name="peso" value={formData.peso} onChange={handleChange} />
            <label> Estatura (cm):</label>
            <input type="number" step="0.1" size="3" maxLength="3" min="0" max="150" name="estatura" value={formData.estatura} onChange={handleChange} />
            <label> PC (cm):</label>
            <input type="number" step="0.1" size="3" maxLength="3" min="0" max="150" name="pc" value={formData.pc} onChange={handleChange} />
            <label> Temp. Axilar (°C):</label>
            <input type="number" step="0.1" size="3" maxLength="3" min="0" max="50" name="tempaux" value={formData.tempaux} onChange={handleChange} />
            <label> FR (irpm):</label>
            <input type="number" step="1" size="3" maxLength="3" min="0" max="200" name="fr" value={formData.fr} onChange={handleChange} />
        </fieldset>
        <fieldset>
                <h2>Exame Físico</h2>
                <label> Estado Geral:</label>
                <select name="estgeral" value={formData.estgeral} onChange={handleChange}>
                    <option value="Ativo">Ativo</option>
                    <option value="Outro">Outro</option>
                </select>
                <label> Estado da Pele:</label>
                <select name="estpele" value={formData.estpele} onChange={handleChange}>
                    <option value="Lisa">Lisa</option>
                    <option value="Outro">Outro</option>
                </select>
                <label> Krammer:</label>
                <input type="number" step="1" size="1" maxLength="1" min="1" max="4" name="krammer" value={formData.krammer} onChange={handleChange} />
                <label> Millium:</label>
                <select name="millium" value={formData.millium} onChange={handleChange}>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                </select>
                <label> Hemangioma:</label>
                <select name="hemangioma" value={formData.hemangioma} onChange={handleChange}>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                </select>
                <label> Manchas Mongólicas:</label>
                <select name="mancham" value={formData.mancham} onChange={handleChange}>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                </select>
                <label> Eritema Tóxico:</label>
                <select name="eritema" value={formData.eritema} onChange={handleChange}>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                </select>
      </fieldset>
      <fieldset>
                <label>Cabeça</label>
                <br />
                <label>Fontenelas:</label>
                <label>
                    <input type="radio" name="fontenelas" value="abauladas" checked={dados.fontenelas === 'abauladas'} onChange={handleChange} />Abauladas
                </label>
                <label>
                    <input type="radio" name="fontenelas" value="deprimidas" checked={dados.fontenelas === 'deprimidas'} onChange={handleChange} />Deprimidas
                </label>
                <label>
                    <input type="radio" name="fontenelas" value="planas" checked={dados.fontenelas === 'planas'} onChange={handleChange} />Planas
                </label>
                <label>Bossa serossanguinolenta:</label>
                <label>
                    <input type="radio" name="bossa" value="sim" checked={dados.bossa === 'sim'} onChange={handleChange} />Sim
                </label>
                <label>
                    <input type="radio" name="bossa" value="nao" checked={dados.bossa === 'nao'} onChange={handleChange} />Não
                </label>
                <label>Cefalohematoma:</label>
                <label>
                    <input type="radio" name="cefalohematoma" value="sim" checked={dados.cefalohematoma === 'sim'} onChange={handleChange} />Sim
                </label>
                <label>
                    <input type="radio" name="cefalohematoma" value="nao" checked={dados.cefalohematoma === 'nao'} onChange={handleChange} />Não
                </label>
                <label>Linfonodos cervicais palpáveis:</label>
                <label>
                    <input type="radio" name="linfonodosCervicais" value="movel" checked={dados.linfonodosCervicais === 'movel'} onChange={handleChange} />Móvel
                </label>
                <label>
                    <input type="radio" name="linfonodosCervicais" value="fixo" checked={dados.linfonodosCervicais === 'fixo'} onChange={handleChange} />Fixo
                </label>
                <label>
                    <input type="radio" name="linfonodosCervicais" value="fibrobastico" checked={dados.linfonodosCervicais === 'fibrobastico'} onChange={handleChange} />Fibrobástico
                </label>
                <label>
                    <input type="radio" name="linfonodosCervicais" value="amolecido" checked={dados.linfonodosCervicais === 'amolecido'} onChange={handleChange} />Amolecido
                </label>
                <label>
                    <input type="radio" name="linfonodosCervicais" value="endurecido" checked={dados.linfonodosCervicais === 'endurecido'} onChange={handleChange} />Endurecido
                </label>
                <label>
                    <input type="radio" name="linfonodosCervicais" value="nao" checked={dados.linfonodosCervicais === 'nao'} onChange={handleChange} />Não Apresenta
                </label>
        </fieldset>
        <fieldset>
                <legend>Pescoço e Tórax</legend>
                <label>Torcicolo congênito:</label>
                <label><input type="radio" name="torcicoloCongenito" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="torcicoloCongenito" value="Não" checked onChange={handleChange} />Não</label>

                <label>Tórax:</label>
                <label>Simetria:</label>
                <label><input type="radio" name="toraxSimetria" value="Assimétrico" onChange={handleChange} />Assimétrico</label>
                <label><input type="radio" name="toraxSimetria" value="Simétrico" checked onChange={handleChange} />Simétrico</label>

                <label>Deformidades:</label>
                <label><input type="radio" name="toraxDeformidades" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="toraxDeformidades" value="Não" checked onChange={handleChange} />Não</label>

                <label>Linfonodo palpável supraclavicular:</label>
                <label><input type="radio" name="linfonodoSupraclavicular" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="linfonodoSupraclavicular" value="Não" checked onChange={handleChange} />Não</label>

                <label>Linfonodo palpável axilar:</label>
                <label><input type="radio" name="linfonodoAxilar" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="linfonodoAxilar" value="Não" checked onChange={handleChange} />Não</label>

                <label>Mamilos:</label>
                <label>Broto Mamário:</label>
                <label><input type="radio" name="brotoMamario" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="brotoMamario" value="Não" checked onChange={handleChange} />Não</label>

                <label>Ausculta Pulmonar:</label>
                <label>Tiragem:</label>
                <label><input type="radio" name="auscultaPulmonarTiragem" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="auscultaPulmonarTiragem" value="Não" checked onChange={handleChange} />Não</label>

                <label>Retração Xifoidiana:</label>
                <label><input type="radio" name="auscultaPulmonarRetração" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="auscultaPulmonarRetração" value="Não" checked onChange={handleChange} />Não</label>

                <label>Gemidos:</label>
                <label><input type="radio" name="auscultaPulmonarGemidos" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="auscultaPulmonarGemidos" value="Não" checked onChange={handleChange} />Não</label>

                <label>Estridor:</label>
                <label><input type="radio" name="auscultaPulmonarEstridor" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="auscultaPulmonarEstridor" value="Não" checked onChange={handleChange} />Não</label>

                <label>Sinais de esforço respiratório:</label>
                <label><input type="radio" name="auscultaPulmonarSinaisEsforco" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="auscultaPulmonarSinaisEsforco" value="Não" checked onChange={handleChange} />Não</label>

                <label>Ausculta Cardíaca:</label>
                <label><input type="radio" name="auscultaCardiacaSopro" value="Bulhas cardíacas" onChange={handleChange} />Bulhas cardíacas</label>
                <label><input type="radio" name="auscultaCardiacaSopro" value="Com Sopro" onChange={handleChange} />Com Sopro</label>
                <label><input type="radio" name="auscultaCardiacaSopro" value="Sem Sopro" checked onChange={handleChange} />Sem Sopro</label>
          </fieldset>
          <fieldset>
                <legend>Abdome</legend>
                <label>Abdome:</label>
                <label><input type="radio" name="abdome" value="Dilatado" checked onChange={handleChange} />Dilatado</label>
                <label><input type="radio" name="abdome" value="Escavado" onChange={handleChange} />Escavado</label>
                <label><input type="radio" name="abdome" value="Globoso" onChange={handleChange} />Globoso</label>

                <label>Hérnia umbilical:</label>
                <label><input type="radio" name="herniaUmbilical" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="herniaUmbilical" value="Não" checked onChange={handleChange} />Não</label>

                <label>Ruídos hidroaéreos:</label>
                <label><input type="radio" name="ruidosHidroaereos" value="Presentes" onChange={handleChange} />Presentes</label>
                <label><input type="radio" name="ruidosHidroaereos" value="Ausentes" checked onChange={handleChange} />Ausentes</label>

                <label>Coto umbilical:</label>
                <label><input type="radio" name="cotoUmbilical" value="Desidratado" onChange={handleChange} />Desidratado</label>
                <label><input type="radio" name="cotoUmbilical" value="Mumificado" checked onChange={handleChange} />Mumificado</label>
                <label><input type="radio" name="cotoUmbilical" value="Em Cicatrização" onChange={handleChange} />Em Cicatrização</label>

                <label>Secreção:</label>
                <label><input type="radio" name="secrecaoUmbilical" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="secrecaoUmbilical" value="Não" checked onChange={handleChange} />Não</label>

                <label>Hiperemia:</label>
                <label><input type="radio" name="hiperemiaUmbilical" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="hiperemiaUmbilical" value="Não" checked onChange={handleChange} />Não</label>

                <label>Odor:</label>
                <label><input type="radio" name="odorUmbilical" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="odorUmbilical" value="Não" checked onChange={handleChange} />Não</label>

                <label>Granuloma:</label>
                <label><input type="radio" name="granulomaUmbilical" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="granulomaUmbilical" value="Não" checked onChange={handleChange} />Não</label>

                <label>Dor à palpação:</label>
                <label><input type="radio" name="dorPalpacaoAbdome" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="dorPalpacaoAbdome" value="Não" checked onChange={handleChange} />Não</label>
            </fieldset>
            <fieldset>
                <legend>Membros</legend>
                <label>Membros Superiores:</label>
                <label>Deformidades:</label>
                <label><input type="radio" name="deformidadesMS" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="deformidadesMS" value="Não" checked onChange={handleChange} />Não</label>

                <label>Malformação:</label>
                <label><input type="radio" name="malformacaoMS" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="malformacaoMS" value="Não" checked onChange={handleChange} />Não</label>

                <label>Linha Palmar:</label>
                <label><input type="radio" name="linhaPalmarMS" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="linhaPalmarMS" value="Não" checked onChange={handleChange} />Não</label>

                <label>Membros Inferiores:</label>
                <label>Deformidades:</label>
                <label><input type="radio" name="deformidadesMI" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="deformidadesMI" value="Não" checked onChange={handleChange} />Não</label>

                <label>Malformação:</label>
                <label><input type="radio" name="malformacaoMI" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="malformacaoMI" value="Não" checked onChange={handleChange} />Não</label>

                <label>Pé Torto:</label>
                <label><input type="radio" name="peTortoMI" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="peTortoMI" value="Não" checked onChange={handleChange} />Não</label>

                <label>Polidactilia:</label>
                <label><input type="radio" name="polidactiliaMI" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="polidactiliaMI" value="Não" checked onChange={handleChange} />Não</label>
            </fieldset>
            <fieldset>
                <legend>Genitália</legend>
                <label>Feminina:</label>
                <label>Pequenos lábios e clitóris proeminentes:</label>
                <label><input type="radio" name="gfLabios" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="gfLabios" value="Não" checked onChange={handleChange} />Não</label>

                <label>Secreção:</label>
                <label><input type="radio" name="gfSecrecao" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="gfSecrecao" value="Não" checked onChange={handleChange} />Não</label>

                <label>Sinéquia:</label>
                <label><input type="radio" name="gfSinequia" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="gfSinequia" value="Não" checked onChange={handleChange} />Não</label>

                <label>Hérnia inguinal:</label>
                <label><input type="radio" name="gfHernia" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="gfHernia" value="Não" checked onChange={handleChange} />Não</label>

                <label>Masculina:</label>
                <label>Hérnia inguinal:</label>
                <label><input type="radio" name="gmHernia" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="gmHernia" value="Não" checked onChange={handleChange} />Não</label>

                <label>Hidrocele:</label>
                <label><input type="radio" name="gmHidrocele" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="gmHidrocele" value="Não" checked onChange={handleChange} />Não</label>

                <label>Fimose fisiológica:</label>
                <label><input type="radio" name="gmFimose" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="gmFimose" value="Não" checked onChange={handleChange} />Não</label>

                <label>Testículos:</label>
                <label><input type="radio" name="gmTesticulos" value="Ectópicos" onChange={handleChange} />Ectópicos</label>
                <label><input type="radio" name="gmTesticulos" value="Criptorquidia" checked onChange={handleChange} />Criptorquidia</label>

                <label>Meato Urinário:</label>
                <label><input type="radio" name="gmMeato" value="Visualizado" onChange={handleChange} />Visualizado</label>
                <label><input type="radio" name="gmMeato" value="Não Visualizado" checked onChange={handleChange} />Não Visualizado</label>
                <label><input type="radio" name="gmMeato" value="Hipospádia" onChange={handleChange} />Hipospádia</label>
                <label><input type="radio" name="gmMeato" value="Epispádia" onChange={handleChange} />Epispádia</label>
            </fieldset>

            <fieldset>
                <legend>Orifício Anal</legend>
                <label>Anomalias:</label>
                <label><input type="radio" name="oaAnomalias" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="oaAnomalias" value="Não" checked onChange={handleChange} />Não</label>

                <label>Fissuras:</label>
                <label><input type="radio" name="oaFissuras" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="oaFissuras" value="Não" checked onChange={handleChange} />Não</label>

                <label>Assaduras:</label>
                <label><input type="radio" name="oaAssaduras" value="Sim" onChange={handleChange} />Sim</label>
                <label><input type="radio" name="oaAssaduras" value="Não" checked onChange={handleChange} />Não</label>
            </fieldset>
            <fieldset>
                <legend>Marcos do Desenvolvimento</legend>
                <label>Pernas e braços fletidos cabeça lateralizada:</label>
                <label><input type="radio" name="mdPernas" value="Presente" onChange={handleChange} />Presente</label>
                <label><input type="radio" name="mdPernas" value="Ausente" onChange={handleChange} />Ausente</label>
                <label><input type="radio" name="mdPernas" value="Não verificado" checked onChange={handleChange} />Não verificado</label>

                <label>Observa um rosto:</label>
                <label><input type="radio" name="mdRosto" value="Presente" onChange={handleChange} />Presente</label>
                <label><input type="radio" name="mdRosto" value="Ausente" onChange={handleChange} />Ausente</label>
                <label><input type="radio" name="mdRosto" value="Não verificado" checked onChange={handleChange} />Não verificado</label>

                <label>Eleva a cabeça:</label>
                <label><input type="radio" name="mdCabeca" value="Presente" onChange={handleChange} />Presente</label>
                <label><input type="radio" name="mdCabeca" value="Ausente" onChange={handleChange} />Ausente</label>
                <label><input type="radio" name="mdCabeca" value="Não verificado" checked onChange={handleChange} />Não verificado</label>
            </fieldset>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
