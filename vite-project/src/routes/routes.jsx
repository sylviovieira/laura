import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import Menu from '../components/Menu';
import FormularioAnamnese from '../components/RecemNascido';
import Footer from '../components/Footer';

const Routes = () => {
    return (
        <Router>
            <Menu />
            <RouterRoutes>
                <Route path="/" element={<FormularioAnamnese />} />
                {/* Adicione outras rotas conforme necessário */}
            </RouterRoutes>
            <Footer />
        </Router>
    );
};

export default Routes;
