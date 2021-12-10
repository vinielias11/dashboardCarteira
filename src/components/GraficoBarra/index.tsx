import React from 'react';

import { 
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip
 } from 'recharts';
 
import formatarDinheiro from '../../utils/formatarDinheiro';

import { Container, Esquerda, Direita } from './styles'

interface IGraficoBarraProps {
    title: string;
    data: {
        name: string;
        valor: number;
        porcentagem: number;
        cor: string;
    }[];
}

const GraficoBarra: React.FC<IGraficoBarraProps> = ({ title, data }) => {
    return (
        <Container>
            <Esquerda>
                <h2>{title}</h2>
            </Esquerda>
            <Direita>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="valor">
                            {data.map((i) => (
                                <Cell key={i.name} cursor="pointer" fill={i.cor} />
                            ))}
                        </Bar>
                        <Tooltip formatter={(valor: number) => formatarDinheiro(valor)}/>
                    </BarChart>
                </ResponsiveContainer>
            </Direita>
        </ Container>
    );
}

export default GraficoBarra;