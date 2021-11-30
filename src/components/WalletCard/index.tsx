import React from 'react';

import dollar from '../../assets/dollar.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

import { Container } from './styles'

interface IWalletCardProps {
    title: string;
    amount: number;
    footer: string;
    icon: 'dollar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletCard: React.FC<IWalletCardProps> = ({
    title,
    amount,
    footer,
    icon,
    color
}) => {

    const iconeSelecionado = () => {
        const obj = {
            ['dollar']: () => dollar,
            ['arrowUp']: () => arrowUp,
            ['arrowDown']: () => arrowDown
        }

        return obj[icon]();
    }

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>{amount}</h1>
            <small>{footer}</small>
            <img src={String(iconeSelecionado)} alt={title} />
        </ Container>
    );
}

export default WalletCard;