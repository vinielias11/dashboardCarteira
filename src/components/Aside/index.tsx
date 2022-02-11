import React, { useState } from 'react';
import logoimg from '../../assets/logo.svg';
import Toggle from '../Toggle';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    FooterTrocaDeTema
} from './styles'

import { useAuth } from '../../hooks/auth';
import { useTema } from '../../hooks/theme';

const Aside: React.FC = () => {
    const [isToggleMenuAberto, setIsToggleMenuAberto] = useState(false);

    const { signOut } = useAuth();
    const { temaToggle, tema } = useTema(),
        [temaDark, setTemaDark] = useState(() => tema.title === 'dark' ? true : false);

    const trataToggleMenu = () => {
        setIsToggleMenuAberto(!isToggleMenuAberto);
    };

    const trataTrocaDeTema = () => {
        setTemaDark(!temaDark);
        temaToggle();
    };

    return (
        <Container isMenuAberto={isToggleMenuAberto}>
            <Header>
                <ToggleMenu onClick={trataToggleMenu}>
                    { isToggleMenuAberto ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>

                <LogImg src={logoimg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/"><MdDashboard/>Dashboard</MenuItemLink>
                <MenuItemLink href="/list/entradas"><MdArrowUpward/>Entradas</MenuItemLink>
                <MenuItemLink href="/list/saidas"><MdArrowDownward/>Saídas</MenuItemLink>
                <MenuItemButton onClick={signOut}><MdExitToApp/>Sair</MenuItemButton>
            </MenuContainer>

            <FooterTrocaDeTema isMenuAberto={isToggleMenuAberto}>
                <Toggle labelEsquerda="Light" labelDireita="Dark" checked={temaDark} onChange={trataTrocaDeTema} />
            </FooterTrocaDeTema>
        </Container>
    );
}

export default Aside;