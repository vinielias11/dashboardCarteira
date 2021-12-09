import { title } from 'process';
import React from 'react';

import { Container } from './styles'

interface ICardSituacaoProps {
    title: string;
    desc: string;
    footerText: string;
    icon: string | undefined;
}

const CardSituacao: React.FC<ICardSituacaoProps> = ({
    title,
    desc,
    footerText,
    icon
}) => {
    return (
        <Container>
            <header>
                <h1>{title} <img src={icon} alt={title}/></h1>
                <p>{desc}</p>
            </header>
            <footer>
                <span>{footerText}</span>
            </footer>
        </ Container>
    );
}

export default CardSituacao;