import React, { useState, useMemo } from 'react';

import { Container, Content } from './styles';
import ContentHeader  from '../../components/ContentHeader';
import SelectInput  from '../../components/SelectInput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import meses from '../../utils/meses';
import WalletCard from '../../components/WalletCard';

const Dashboard: React.FC = () => {
    const [mesSelecionado, setMesSelecionado] = useState<number>(new Date().getMonth() + 1);
    const [anoSelecionado, setAnoSelecionado] = useState<number>(new Date().getFullYear());

    const options = [
        { value: 'Vinicius', label: 'Vinicius' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' }
    ];

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

    const trataMesSelecionado = (mes: string) => {
        try {
            const parseMes = Number(mes);
            setMesSelecionado(parseMes);
        } catch (err) {
            throw new Error('Mês inválido. Apenas 0 a 12 é suportado.')
        }
    }

    const trataAnoSelecionado = (ano: string) => {
        try {
            const parseAno = Number(ano);
            setAnoSelecionado(parseAno);
        } catch (err) {
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
                <WalletCard title="saldo" amount={150.00} footer="atualizado com base nas entradas e saídas" icon="dollar" color="#0000ff" />
                <WalletCard title="entradas" amount={5000.00} footer="atualizado com base nas entradas e saídas" icon="arrowUp" color="#46a656" />
                <WalletCard title="saídas" amount={4850.00} footer="atualizado com base nas entradas e saídas" icon="arrowDown" color="#e02828" />
            </Content>

        </Container>
    );
}

export default Dashboard;