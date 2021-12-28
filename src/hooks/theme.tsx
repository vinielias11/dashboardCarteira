import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface IThemeContext {
    temaToggle(): void;
    tema: ITheme;
}

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        grey: string;

        success: string;
        info: string;
        warning: string;
    },
}

const TemaContexto = createContext<IThemeContext>({} as IThemeContext);

const TemaProvider: React.FC = ({ children }) => {
    const [tema, setTema] = useState<ITheme>(() => {
        const temaSalvo = localStorage.getItem('@dashboardCarteira:tema');
        
        if (temaSalvo) {
            return JSON.parse(temaSalvo);
        } else {
            return dark;
        }
        
    });

    const temaToggle = () => {
        if (tema.title === 'dark') {
            setTema(light);
            localStorage.setItem('@dashboardCarteira:tema', JSON.stringify(light));
        } else {
            setTema(dark);
            localStorage.setItem('@dashboardCarteira:tema', JSON.stringify(dark));
        }
    };

    return (
        <TemaContexto.Provider value={{ temaToggle, tema }}>
            {children}
        </TemaContexto.Provider>
    )

};

function useTema(): IThemeContext {
    const contexto = useContext(TemaContexto);
    return contexto;
}

export { TemaProvider, useTema };