import React, { useMemo, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import OperationCard from '../../components/OperationCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses'
import formatarDinheiro from '../../utils/formatarDinheiro'
import formatarData from '../../utils/formatarData'

import { Container, Content, Filters } from './styles';
import meses from '../../utils/meses';

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
    const [movimentoSelecionado, setMovimentoSelecionado] = useState(['recorrente', 'eventual']);

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

    const months = useMemo(() => {
        return meses.map((mes, indice) => {
            return {
                value: indice + 1,
                label: mes
            }
        })

    }, []);

    const years = useMemo(() => {
        let anosUnicos: number[] =[];

        listData.forEach(item => {
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

    }, [listData]);

    const onClickTipoMovimentacao = (tipoMovimentacao: string) => {
        const isSelecionado = movimentoSelecionado.findIndex(item => item === tipoMovimentacao);

        if (isSelecionado >= 0) {
            const filtrado = movimentoSelecionado.filter(item => item !== tipoMovimentacao);
            setMovimentoSelecionado(filtrado);
        } else {
            setMovimentoSelecionado((prev) => [...prev, tipoMovimentacao]);
        }
    }

    useEffect(() => {
        const datasFiltradas = listData.filter(item => {
            const date = new Date(item.date),
                mes = String(date.getMonth() + 1),
                ano = String(date.getFullYear());

            return mes === mesSelecionado && ano === anoSelecionado && movimentoSelecionado.includes(item.frequency);
        });

        const datasFormatadas = datasFiltradas.map(item => {
            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatarDinheiro(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatarData(item.date),
                tagColor: item.frequency === 'recorrente' ? '#d7eedb' : '#a55858'
            }

        });

        setData(datasFormatadas)
    }, [listData, mesSelecionado, anoSelecionado, data.length, movimentoSelecionado]);
    
    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e) => setMesSelecionado(e.target.value)} defaultValue={mesSelecionado}/>
                <SelectInput options={years} onChange={(e) => setAnoSelecionado(e.target.value)} defaultValue={anoSelecionado}/>
            </ContentHeader>

            <Filters>
                <button type="button" className={`tag-filter tag-filter-recorrente ${movimentoSelecionado.includes('recorrente') && 'tag-ativado'}`} onClick={() => onClickTipoMovimentacao('recorrente')}>Recorrentes</button>
                <button type="button" className={`tag-filter tag-filter-eventual ${movimentoSelecionado.includes('eventual') && 'tag-ativado'}`} onClick={() => onClickTipoMovimentacao('eventual')}>Eventuais</button>
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