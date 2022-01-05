import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    
    > h3 {
        color: ${props => props.theme.colors.white};
    }

    >img {
        width: 40px;
        height: 40px;
        margin-right: 7px;
    }

`;

export const Form = styled.form`
    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
    margin-bottom: 20px;
    color: ${props => props.theme.colors.white};

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.success};
    }

`;
