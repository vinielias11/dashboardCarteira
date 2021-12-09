import React, { useState, useMemo } from 'react';

import { Container, Content } from './styles';

import ContentHeader  from '../../components/ContentHeader';
import SelectInput  from '../../components/SelectInput';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';

import meses from '../../utils/meses';

import WalletCard from '../../components/WalletCard';
import CardSituacao from '../../components/CardSituacao';
import GraficoPizza from '../../components/GraficoPizza';
import GraficoLinhas from '../../components/GraficoLinhas';

const Dashboard: React.FC = () => {
    const [mesSelecionado, setMesSelecionado] = useState<number>(new Date().getMonth() + 1);
    const [anoSelecionado, setAnoSelecionado] = useState<number>(new Date().getFullYear());

    const months = useMemo(() => {
        return meses.map((mes, indice) => {
            return {
                value: indice + 1,
                label: mes
            }
        })

    }, []);

    const years = useMemo(() => {
        let anosUnicos: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const data = new Date(item.date),
                ano = data.getFullYear();

            if (!anosUnicos.includes(ano)) {
                anosUnicos.push(ano);
            }
        })

        return anosUnicos.map(year => {
            return {
                value: year,
                label: year
            }
        });

    }, []);

    const totalSaidas = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const data = new Date(item.date),
                ano = data.getFullYear(),
                mes = data.getMonth() + 1;

            if (mes === mesSelecionado && ano === anoSelecionado) {
                try {
                    total += item.amount
                } catch {
                    throw new Error('Valor inválido. Deve ser número');
                }
            }
        });

        return total;

    }, [mesSelecionado, anoSelecionado]);

    const totalEntradas = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const data = new Date(item.date),
                ano = data.getFullYear(),
                mes = data.getMonth() + 1;

            if (mes === mesSelecionado && ano === anoSelecionado) {
                try {
                    total += item.amount
                } catch {
                    throw new Error('Valor inválido. Deve ser número');
                }
            }
        });

        return total;

    }, [mesSelecionado, anoSelecionado]);

    const saldo = useMemo(() => {
        return totalEntradas - totalSaidas;
    }, [totalEntradas, totalSaidas]);

    const trataCard = useMemo(() => {
        if (saldo < 0) {
            return {
                title: "Que triste!",
                desc: "Sua carteira está negativa.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas."
            }
        } else if (saldo === 0) {
            return {
                title: "Ufa!",
                desc: "Você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado no próximo mês."
            }
        } else {
            return {
                title: "Muito bem!",
                desc: "Sua carteira está positiva.",
                footerText: "Considere investir seu saldo."
            }
        }
    }, [saldo]);

    const graficoEntradasSaidas = useMemo(() => {
        const total = totalEntradas + totalSaidas,
            porcentagemEntradas = (totalEntradas / total) * 100,
            porcentagemSaidas = (totalSaidas / total) * 100,
            data = [
                { name: 'Entradas', value: totalEntradas, porcentagem: Number(porcentagemEntradas.toFixed(1)), color: '#46a656' },
                { name: 'Saidas', value: totalSaidas, porcentagem: Number(porcentagemSaidas.toFixed(1)), color: '#e02828' }
            ];

        return data;

    }, [totalEntradas, totalSaidas]);

    const trataMesSelecionado = (mes: string) => {
        try {
            const parseMes = Number(mes);
            setMesSelecionado(parseMes);
        } catch {
            throw new Error('Mês inválido. Apenas 0 a 12 é suportado.')
        }
    }

    const trataAnoSelecionado = (ano: string) => {
        try {
            const parseAno = Number(ano);
            setAnoSelecionado(parseAno);
        } catch {
            throw new Error('Ano inválido. Apenas números inteiros são suportados.')
        }
    }

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={months} 
                                onChange={(e) => trataMesSelecionado(e.target.value)} 
                                defaultValue={mesSelecionado}/>

                <SelectInput options={years} 
                                onChange={(e) => trataAnoSelecionado(e.target.value)} 
                                defaultValue={anoSelecionado}/>
            </ContentHeader>
            
            <Content>
                <WalletCard title="saldo" amount={saldo} footer="atualizado com base nas entradas e saídas" icon="dollar" color="#0000ff" />
                <WalletCard title="entradas" amount={totalEntradas} footer="atualizado com base nas entradas e saídas" icon="arrowUp" color="#46a656" />
                <WalletCard title="saídas" amount={totalSaidas} footer="atualizado com base nas entradas e saídas" icon="arrowDown" color="#e02828" />
                <CardSituacao title={trataCard.title} desc={trataCard.desc} footerText={trataCard.footerText} />
                <GraficoPizza data={graficoEntradasSaidas} />
                <GraficoLinhas />
            </Content>

        </Container>
    );
}

export default Dashboard;