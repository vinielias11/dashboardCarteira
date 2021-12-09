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
    const [mesSelecionado, setMesSelecionado] = useState<number>(new Date().getMonth() + 1);
    const [anoSelecionado, setAnoSelecionado] = useState<number>(new Date().getFullYear());
    const [movimentoSelecionado, setMovimentoSelecionado] = useState(['recorrente', 'eventual']);

    const { type } = match.params;

    const infoCards = useMemo(() => {
        if (type === 'entradas') {
            return {
                title: 'Entradas',
                lineColor: '#46a656',
                listData: gains
            }
        } else {
            return {
                title: 'Saídas',
                lineColor: '#e02828',
                listData: expenses
            }
        }

    }, [type])

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

        infoCards.listData.forEach(item => {
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

    }, [infoCards.listData]);

    const onClickTipoMovimentacao = (tipoMovimentacao: string) => {
        const isSelecionado = movimentoSelecionado.findIndex(item => item === tipoMovimentacao);

        if (isSelecionado >= 0) {
            const filtrado = movimentoSelecionado.filter(item => item !== tipoMovimentacao);
            setMovimentoSelecionado(filtrado);
        } else {
            setMovimentoSelecionado((prev) => [...prev, tipoMovimentacao]);
        }
    }

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

    useEffect(() => {
        const datasFiltradas = infoCards.listData.filter(item => {
            const date = new Date(item.date),
                mes = date.getMonth() + 1,
                ano = date.getFullYear();

            return mes === mesSelecionado && ano === anoSelecionado && movimentoSelecionado.includes(item.frequency);
        });

        const datasFormatadas = datasFiltradas.map(item => {
            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatarDinheiro(item.amount),
                frequency: item.frequency,
                dateFormatted: formatarData(item.date),
                tagColor: item.frequency === 'recorrente' ? '#d7eedb' : '#a55858'
            }

        });

        setData(datasFormatadas)
    }, [infoCards.listData, mesSelecionado, anoSelecionado, data.length, movimentoSelecionado]);
    
    return (
        <Container>
            <ContentHeader title={infoCards.title} lineColor={infoCards.lineColor}>
                <SelectInput options={months} 
                             onChange={(e) => trataMesSelecionado(e.target.value)} 
                             defaultValue={mesSelecionado}/>

                <SelectInput options={years} 
                             onChange={(e) => trataAnoSelecionado(e.target.value)} 
                             defaultValue={anoSelecionado}/>
            </ContentHeader>

            <Filters>
                <button type="button" 
                        className={`tag-filter tag-filter-recorrente ${movimentoSelecionado.includes('recorrente') && 'tag-ativado'}`} 
                        onClick={() => onClickTipoMovimentacao('recorrente')}>
                        Recorrentes
                </button>

                <button type="button" 
                        className={`tag-filter tag-filter-eventual ${movimentoSelecionado.includes('eventual') && 'tag-ativado'}`} 
                        onClick={() => onClickTipoMovimentacao('eventual')}>
                        Eventuais
                </button>
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