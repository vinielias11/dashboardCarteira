import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { useTema } from './hooks/theme'

import dark from './styles/themes/dark';

import Routes from './routes';

const App: React.FC = () => {
    const {tema} = useTema();
    return (
        <ThemeProvider theme={tema}>
            <GlobalStyles />
            <Routes/>
        </ThemeProvider>
    );
}

export default App;