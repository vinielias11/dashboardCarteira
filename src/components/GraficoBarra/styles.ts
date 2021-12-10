import styled from "styled-components";

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;

`;

export const Esquerda = styled.aside`
    padding: 30px 20px;

    > h2 {
        padding-left: 16px;
        margin-bottom: 10px;
    }

`;

export const Direita = styled.main`,
    flex: 1;
    height: 150px;
`;