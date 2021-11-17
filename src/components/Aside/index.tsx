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
    MenuItemLink 
} from './styles'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoimg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard"><MdDashboard/>Dashboard</MenuItemLink>
                <MenuItemLink href="/list/entradas"><MdArrowUpward/>Entradas</MenuItemLink>
                <MenuItemLink href="/list/saidas"><MdArrowDownward/>Saídas</MenuItemLink>
                <MenuItemLink href="#"><MdExitToApp/>Sair</MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;