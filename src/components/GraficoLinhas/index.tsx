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

import { Container } from './styles';

const GraficoLinhas: React.FC = () => (
    <Container>
        <h2>Histórico de saldo</h2>

       <ResponsiveContainer>
           <LineChart data={[]}>
               <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
               <XAxis dataKey="month" stroke="#cecece" />
               <Tooltip />
               <Line type="monotone" dataKey="valorEntradas" name="Entradas" stroke="#46a656" strokeWidth={5} dot={{ r:5 }} activeDot={{ r: 8 }} />
               <Line type="monotone" dataKey="valorSaidas" name="Saídas" stroke="#e02828" strokeWidth={5} dot={{ r:5 }} activeDot={{ r: 8 }} />
           </LineChart>
       </ResponsiveContainer>
    </Container>
)

export default GraficoLinhas;