import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.grey};
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
`;

export const Title = styled.h3`
    font-size: 30px;
    font-family: Montserrat;
    color: ${props => props.theme.colors.white};
    margin-top: 100px;
    margin-left: 20px;
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