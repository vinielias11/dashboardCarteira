import styled from "styled-components";

interface ILegendaProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    height: 360px;
    flex-direction: column;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
`;

export const ContainerLegenda = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
`;

export const Legenda = styled.li<ILegendaProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    margin-left: 16px;

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

    @media(max-width: 1280px) {
        > div {
            width: 30px;
            height: 30px;
        }
    }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }

    @media(max-width: 1200px) {
        flex-direction: column;
    }
`;