/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

import { Container, Header, ContainerLegenda, Legenda } from './styles';

import formatarDinheiro from '../../utils/formatarDinheiro';

interface IGraficoLinhaProps {
    data: {
        mes: string;
        valorEntradas: number;
        valorSaidas: number;
    }[];
    linhaEntradas: string;
    linhaSaidas: string;
}

const GraficoLinhas: React.FC<IGraficoLinhaProps> = ({
    data, linhaEntradas, linhaSaidas
}) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>
            <ContainerLegenda>
                <Legenda color={linhaEntradas}>
                    <div></div>
                    <span>Entradas</span>
                </Legenda>
                <Legenda color={linhaSaidas}>
                    <div></div>
                    <span>Saídas</span>
                </Legenda>
            </ContainerLegenda>
        </Header>

       <ResponsiveContainer>
           <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
               <CartesianGrid strokeDasharray="1 1" stroke="#cecece"/>
               <XAxis dataKey="mes" stroke="#cecece" />
               <Tooltip formatter={(valor: number) => formatarDinheiro(valor)}/>
               <Line type="monotone" dataKey="valorEntradas" name="Entradas" stroke={linhaEntradas} strokeWidth={3} dot={{ r:4 }} activeDot={{ r: 5 }} />
               <Line type="monotone" dataKey="valorSaidas" name="Saídas" stroke={linhaSaidas} strokeWidth={5} dot={{ r: 4 }} activeDot={{ r: 5 }} />
           </LineChart>
       </ResponsiveContainer>
    </Container>
)

export default GraficoLinhas;