import Menu from '../Menu';
import React, { useState } from 'react';

const AnamneseForm = () => {
    const [formData, setFormData] = useState({
        peso: '',
        estatura: '',
        pc: '',
        tempaux: '',
        fr: '',
        estgeral: 'Ativo',
        estpele: 'Lisa',
        estcabeca: 'Normocéfalo',
        estolhos: 'Isocóricas',
        estnariz: 'Pérvio',
        estboca: 'Hidratada',
        estouvido: 'Pérvio',
        esttorax: 'Simétrico',
        estabdome: 'Plano',
        estgenitourinario: 'Íntegro',
        estcoluna: 'Ereta',
        estextremidades: 'Íntegras',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            < Menu />
            <div id="formulario">
                <h1>Anamnese</h1>
                <h2>Questões a serem respondidas</h2>
                <form method="post" id="dados" onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <h2>Identificação do Recém Nascido</h2>
                        </div>
                        <div>
                            <label>
                                Peso (Kg):
                                <input type="number" name="peso" value={formData.peso} onChange={handleChange} />
                            </label>
                            <label>
                                Estatura (cm):
                                <input type="number" name="estatura" value={formData.estatura} onChange={handleChange} />
                            </label>
                            <label>
                                PC (cm):
                                <input type="number" name="pc" value={formData.pc} onChange={handleChange} />
                            </label>
                            <label>
                                Temperatura Axilar (°C):
                                <input type="number" name="tempaux" value={formData.tempaux} onChange={handleChange} />
                            </label>
                            <label>
                                FR (irpm):
                                <input type="number" name="fr" value={formData.fr} onChange={handleChange} />
                            </label>
                            <label>
                                Estado Geral:
                                <select name="estgeral" value={formData.estgeral} onChange={handleChange}>
                                    <option value="Ativo">Ativo</option>
                                    <option value="Letárgico">Letárgico</option>
                                    <option value="Comatoso">Comatoso</option>
                                </select>
                            </label>
                            <label>
                                Estado da Pele:
                                <select name="estpele" value={formData.estpele} onChange={handleChange}>
                                    <option value="Lisa">Lisa</option>
                                    <option value="Maculada">Maculada</option>
                                    <option value="Papulosa">Papulosa</option>
                                </select>
                            </label>
                            <label>
                                Estado da Cabeça:
                                <select name="estcabeca" value={formData.estcabeca} onChange={handleChange}>
                                    <option value="Normocéfalo">Normocéfalo</option>
                                    <option value="Microcéfalo">Microcéfalo</option>
                                    <option value="Macrocéfalo">Macrocéfalo</option>
                                </select>
                            </label>
                            <label>
                                Estado dos Olhos:
                                <select name="estolhos" value={formData.estolhos} onChange={handleChange}>
                                    <option value="Isocóricas">Isocóricas</option>
                                    <option value="Anisocóricas">Anisocóricas</option>
                                </select>
                            </label>
                            <label>
                                Estado do Nariz:
                                <select name="estnariz" value={formData.estnariz} onChange={handleChange}>
                                    <option value="Pérvio">Pérvio</option>
                                    <option value="Obstruído">Obstruído</option>
                                </select>
                            </label>
                            <label>
                                Estado da Boca:
                                <select name="estboca" value={formData.estboca} onChange={handleChange}>
                                    <option value="Hidratada">Hidratada</option>
                                    <option value="Ressecada">Ressecada</option>
                                </select>
                            </label>
                            <label>
                                Estado do Ouvido:
                                <select name="estouvido" value={formData.estouvido} onChange={handleChange}>
                                    <option value="Pérvio">Pérvio</option>
                                    <option value="Obstruído">Obstruído</option>
                                </select>
                            </label>
                            <label>
                                Estado do Tórax:
                                <select name="esttorax" value={formData.esttorax} onChange={handleChange}>
                                    <option value="Simétrico">Simétrico</option>
                                    <option value="Assimétrico">Assimétrico</option>
                                </select>
                            </label>
                            <label>
                                Estado do Abdome:
                                <select name="estabdome" value={formData.estabdome} onChange={handleChange}>
                                    <option value="Plano">Plano</option>
                                    <option value="Distendido">Distendido</option>
                                </select>
                            </label>
                            <label>
                                Estado Genitourinário:
                                <select name="estgenitourinario" value={formData.estgenitourinario} onChange={handleChange}>
                                    <option value="Íntegro">Íntegro</option>
                                    <option value="Alterado">Alterado</option>
                                </select>
                            </label>
                            <label>
                                Estado da Coluna:
                                <select name="estcoluna" value={formData.estcoluna} onChange={handleChange}>
                                    <option value="Ereta">Ereta</option>
                                    <option value="Desviada">Desviada</option>
                                </select>
                            </label>
                            <label>
                                Estado das Extremidades:
                                <select name="estextremidades" value={formData.estextremidades} onChange={handleChange}>
                                    <option value="Íntegras">Íntegras</option>
                                    <option value="Amputadas">Amputadas</option>
                                </select>
                            </label>
                        </div>
                    </fieldset>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default AnamneseForm;
