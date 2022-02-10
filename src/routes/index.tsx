import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
    const { logado } = useAuth();

    return (
        <BrowserRouter>
            { logado ? <App/> : <Auth /> }
        </BrowserRouter>
)}

export default Routes;