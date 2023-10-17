import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import PaginaInicial from '../components/PaginaInicial';
import RecemNascido from '../components/RecemNascido';
import PrimeiroMes from '../components/PrimeiroMes';
// ... importe todos os outros componentes aqui ...
import Footer from '../components/Footer';

const Routes = () => {
    return (
        <Router>
            <RouterRoutes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/rn" element={<RecemNascido />} />
                <Route path="/ummes" element={<PrimeiroMes />} />
                {/* ... adicione rotas para todos os outros componentes aqui ... */}
            </RouterRoutes>
            <Footer />
        </Router>
    );
};

export default Routes;
