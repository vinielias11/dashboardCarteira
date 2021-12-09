/* eslint-disable no-useless-computed-key */
import React, { useMemo } from 'react';
import CountUp from 'react-countup';

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

    const iconeSelecionado = useMemo(() => {
        const obj = {
            ['dollar']: () => dollar,
            ['arrowUp']: () => arrowUp,
            ['arrowDown']: () => arrowDown
        }
        return obj[icon]();

    },[icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1> 
                <CountUp
                    end={amount}
                    duration={2}
                    prefix={"R$ "} 
                    separator="." 
                    decimal="," 
                    decimals={2}
                />
            </h1>
            <small>{footer}</small>
            <img src={iconeSelecionado} alt={title} />
        </ Container>
    );
}

export default WalletCard;