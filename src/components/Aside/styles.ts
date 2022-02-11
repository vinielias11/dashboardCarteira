import styled, { css } from 'styled-components';

interface IContainerProps {
    isMenuAberto: boolean;
};

interface IFooterTrocaDeTemaProps {
    isMenuAberto: boolean;
};

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.grey};

    position: relative;

    @media(max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.isMenuAberto ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.isMenuAberto && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.grey};
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogImg = styled.img`
    height: 60px;
    width: 60px;
    margin-top: 100px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    font-size: 30px;
    font-family: Montserrat;
    color: ${props => props.theme.colors.white};
    margin-top: 100px;
    margin-left: 20px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
`;

export const MenuItemLink  = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 12px 0;
    display: flex;
    align-items: center;
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 35px;
        margin-right: 5px;
    }
`;

export const MenuItemButton  = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};
    border: none;
    background: none;
    margin: 12px 0;
    
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 35px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 60px;
    height: 60px;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const FooterTrocaDeTema = styled.footer<IFooterTrocaDeTemaProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 470px) {
        display: ${props => props.isMenuAberto ? 'flex' : 'none'};
    }
`;