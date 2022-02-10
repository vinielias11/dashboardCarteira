import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logado: boolean;
    signIn(email: string, senha: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logado, setLogado] = useState<boolean>(() => {
        const isLogado = localStorage.getItem('@dashboardCarteira:logado');

        return !!isLogado;
    });

    const signIn = (email: string, senha: string) => {
        if (email === 'vinicius@gmail.com' && senha === '123') {
            localStorage.setItem('@dashboardCarteira:logado', 'true');
            setLogado(true)
        } else {
            alert('Senha ou usuário inválido.');
        }
    };

    const signOut = () => {
        localStorage.removeItem('@dashboardCarteira:logado');
        setLogado(false);
    };

    return (
        <AuthContext.Provider value={{ logado, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };