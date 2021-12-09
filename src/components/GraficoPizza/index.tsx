/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts';

import { 
    Container,
    Esquerda,
    Direita,
    Legenda,
    ContainerLegenda
} from './styles'

interface IGraficoProps {
    data: {
        name: string;
        value: number;
        porcentagem: number;
        color: string;
    }[];
}

const GraficoPizza: React.FC<IGraficoProps> = ({ data }) => {
    return (
        <Container>
            <Esquerda>
                <h2>Relação</h2>
                <ContainerLegenda>
                    {
                        data.map((i) => (
                            <Legenda key={i.name} color={i.color}>
                            <div>{i.porcentagem}%</div>
                            <span>{i.name}</span>
                            </Legenda>
                        ))
                    }
                </ContainerLegenda>
            </Esquerda>

            <Direita>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={data} dataKey="value">
                                {
                                    data.map((i) => (
                                        <Cell key={`cell-${i.name}`} fill={i.color} />
                                    ))
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
            </Direita>

        </ Container>
    );
}

export default GraficoPizza;