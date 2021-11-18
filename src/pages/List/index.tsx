import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import OperationCard from '../../components/OperationCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses'
import formatarDinheiro from '../../utils/formatarDinheiro'
import formatarData from '../../utils/formatarData'

import { Container, Content, Filters } from './styles';
import { isTypeNode } from 'typescript';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [mesSelecionado, setMesSelecionado] = useState<string>(String(new Date().getMonth() + 1));
    const [anoSelecionado, setAnoSelecionado] = useState<string>(String(new Date().getFullYear()));

    const { type } = match.params;
    const title = useMemo(() => {
        return type === 'entradas' ? 'Entradas' : 'Saídas';
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entradas' ? '#46a656' : '#e02828';
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entradas' ? gains : expenses;
    }, [type]);

    const months = [
        { value: '1', label: 'Janeiro' },
        { value: '2', label: 'Fevereiro' },
        { value: '3', label: 'Março' },
        { value: '4', label: 'Abril' },
        { value: '5', label: 'Maio' },
        { value: '6', label: 'Junho' },
        { value: '7', label: 'Julho' },
        { value: '8', label: 'Agosto' },
        { value: '9', label: 'Setembro' },
        { value: '10', label: 'Outubro' },
        { value: '11', label: 'Novembro' },
        { value: '12', label: 'Dezembro' }
    ];

    const years = [
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
        { value: '2019', label: '2019' }
    ];

    useEffect(() => {
        const datasFiltradas = listData.filter(item => {
            const date = new Date(item.date),
                mes = String(date.getMonth() + 1),
                ano = String(date.getFullYear());

            return mes === mesSelecionado && ano === anoSelecionado;
        });

        const datasFormatadas = datasFiltradas.map(item => {
            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formatarDinheiro(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatarData(item.date),
                tagColor: item.frequency === 'recorrente' ? '#d7eedb' : '#a55858'
            }

        });

        setData(datasFormatadas)
    }, [listData, mesSelecionado, anoSelecionado, data.length]);
    
    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e) => setMesSelecionado(e.target.value)} defaultValue={mesSelecionado}/>
                <SelectInput options={years} onChange={(e) => setAnoSelecionado(e.target.value)} defaultValue={anoSelecionado}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recorrente">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <OperationCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            value={item.amountFormatted}
                        />

                    ))
                }
            </Content>
        </Container>
    );
}

export default List;