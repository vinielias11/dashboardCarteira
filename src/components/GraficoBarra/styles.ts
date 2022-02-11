import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50% {
        opacity: 0.3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`

interface ILegendaProps {
    color: string;
}

export const Container = styled.div`
    width: 45%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    display: flex;

    animation: ${animate} 0.5s;

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: auto;
    }
`;

export const Esquerda = styled.aside`
    flex: 1;
    padding: 30px 20px;

    > h2 {
        padding-left: 16px;
        margin-bottom: 10px;
    }

`;

export const Direita = styled.main`,
    flex: 1;
    min-height: 150px;
    display: flex;
    justify-content: center;
    padding-top: 35px;
    width: 50%;

    @media(max-width: 1200px) {
        width: 100%;
    }
`;

export const ContainerLegenda = styled.ul`
    list-style: none;
    height: 175px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }

    @media(max-width: 1200px) {
        display: flex;

        height: auto;
    }

`;

export const Legenda = styled.li<ILegendaProps>`
    display: flex;
    align-items: center;
    padding-left: 16px;
    margin-bottom: 7px;

    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1200px) {
        > div {
            width: 40px;
            height: 40px;

            font-size: 10px;
            line-height: 30px;
        }
    }

`;