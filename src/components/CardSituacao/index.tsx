import React from 'react';

import { Container } from './styles'

interface ICardSituacaoProps {
    title: string;
    desc: string;
    footerText: string;
}

const CardSituacao: React.FC<ICardSituacaoProps> = ({
    title,
    desc,
    footerText
}) => {
    return (
        <Container>
            <header>
                <h1>{title} </h1>
                <p>{desc}</p>
            </header>
            <footer>
                <span>{footerText}</span>
            </footer>
        </ Container>
    );
}

export default CardSituacao;