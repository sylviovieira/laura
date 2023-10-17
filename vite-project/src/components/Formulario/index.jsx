import React from 'react';

const FormularioAnamnese = () => {
    return (
        <form method="post" id="dados" action="https://laura.lapinf.ufn.edu.br/dados.csv">
            <fieldset>
                <div>
                    <h2>Identificação do Recém Nascido</h2>
                </div>
                <div>
                    <label> Peso:</label>
                    <input type="number" step="0.0010" size="4" title="Peso do paciente" maxLength="4" min="0" max="15" name="peso" id="peso" />
                    <label>Estatura:</label>
                    <input type="text" name="estatura" id="estatura" />
                    <label> PC(cm):</label>
                    <input type="text" name="pc" id="pc" />
                    <label>Temperatura axilar (ºC):</label>
                    <input type="text" name="tempaux" id="tempaux" />
                </div>
                <br />
                <div>
                    <label> Estado Geral:</label>
                    <label>
                        <input type="radio" name="estgeral" value="Ativo" defaultChecked />Ativo
                    </label>
                    <label>
                        <input type="radio" name="estgeral" value="Hipoativo" />Hipoativo
                    </label>
                    <label>
                        <input type="radio" name="estgeral" value="Letargico" />Letárgico
                    </label>
                    <label>
                        <input type="radio" name="estgeral" value="Calmo" />Calmo
                    </label>
                    <label>
                        <input type="radio" name="estgeral" value="Choroso" />Choroso
                    </label>
                </div>
                <br />
                <div>
                    <label>Estado da Pele:</label>
                    <label>
                        <input type="radio" name="estpele" value="Lisa" defaultChecked />Lisa
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Irregula" />Irregular
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Macia" />Macia
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Aspera" />Áspera
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Rosea" />Rósea
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Palida" />Pálida
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Cianotica" />Cianótica
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Icterica" />Ictérica
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Hidratada" />Hidratada
                    </label>
                    <label>
                        <input type="radio" name="estpele" value="Desidratada" />Desidratada
                    </label>
                </div>
                <br />
                <div>
                    <label> Krammer Zone:</label>
                    <label>
                        <input type="radio" name="krammer" value="1" defaultChecked />1
                    </label>
                    <label>
                        <input type="radio" name="krammer" value="2" />2
                    </label>
                    <label>
                        <input type="radio" name="krammer" value="3" />3
                    </label>
                    <label>
                        <input type="radio" name="krammer" value="4" />4
                    </label>
                    <label>
                        <input type="radio" name="krammer" value="5" />5
                    </label>
                </div>
                <br />
                <div>
                    <label> Millium sebáceo:</label>
                    <label>
                        <input type="radio" name="millium" value="sim" defaultChecked />Sim
                    </label>
                    <label>
                        <input type="radio" name="millium" value="nao" />Não
                    </label>
                    <label> Hemangioma: </label>
                    <label>
                        <input type="radio" name="hemanioma" value="sim" defaultChecked />Sim
                    </label>
                    <label>
                        <input type="radio" name="hemangioma" value="nao" />Não
                    </label>
                    <label> Mancha mongólica: </label>
                    <label>
                        <input type="radio" name="mancham" value="sim" defaultChecked />Sim
                    </label>
                    <label>
                        <input type="radio" name="mancham" value="nao" />Não
                    </label>
                    <label> Eritema tóxico: </label>
                    <label>
                        <input type="radio" name="eritema" value="sim" defaultChecked />Sim
                    </label>
                    <label>
                        <input type="radio" name="eritema" value="nao" />Não
                    </label>
                </div>
                <br />
                <div>
                    <label>Cabeça</label>
                </div>
                <div>
                    <label> Fontenelas:</label>
                    <label>
                        <input type="radio" name="fontenelas" value="abauladas" defaultChecked />Abauladas
                    </label>
                    <label>
                        <input type="radio" name="fontenelas" value="deprimidas" />Deprimidas
                    </label>
                    <label>
                        <input type="radio" name="fontenelas" value="planas" />Planas
                    </label>
                    <label> Bossa serossanguinolenta: </label>
                    <label>
                        <input type="radio" name="bossa" value="sim" defaultChecked />Sim
                    </label>
                    <label>
                        <input type="radio" name="bossa" value="nao" />Não
                    </label>
                    <label> Cefalohematoma: </label>
                    <label>
                        <input type="radio" name="mancham" value="sim" defaultChecked />Sim
                    </label>
                    <label>
                        <input type="radio" name="mancham" value="nao" />Não
                    </label>
                </div>
                <br />
                <div>
                    <label> Linfonodos cervicais palpáveis:</label>
                    <label>
                        <input type="radio" name="linfonodos" value="movel" />Móvel
                    </label>
                    <label>
                        <input type="radio" name="linfonodos" value="fixo" />Fixo
                    </label>
                    <label>
                        <input type="radio" name="linfonodos" value="fibrobastico" />Fibrobástico
                    </label>
                    <label>
                        <input type="radio" name="linfonodos" value="amolecido" />Amolecido
                    </label>
                    <label>
                        <input type="radio" name="linfonodos" value="endurecido" />Endurecido
                    </label>
                    <label>
                        <input type="radio" name="eritema" value="nao" defaultChecked />Não Apresenta
                    </label>
                </div>
                <br />
                <div>
                    <label> Face:</label>
                    <label>
                        <input type="radio" name="face" value="assimetrica" />Assimétrica
                    </label>
                    <label>
                        <input type="radio" name="face" value="simetrica" defaultChecked />Simétrica
                    </label>
                </div>
            </fieldset>
            <div className="row">
                <div className="col-10 col-s-12"></div>
                <div className="col-2 col-s-12"></div>
                <button type="button" id="btnSalvar">Copiar</button>
            </div>
        </form>
    );
};

export default FormularioAnamnese;
