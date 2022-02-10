import React from 'react';
import logoimg from '../../assets/logo.svg';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from './styles'

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
                <LogImg src={logoimg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/"><MdDashboard/>Dashboard</MenuItemLink>
                <MenuItemLink href="/list/entradas"><MdArrowUpward/>Entradas</MenuItemLink>
                <MenuItemLink href="/list/saidas"><MdArrowDownward/>Saídas</MenuItemLink>
                <MenuItemButton onClick={signOut}><MdExitToApp/>Sair</MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;