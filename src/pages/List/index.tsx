import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import OperationCard from '../../components/OperationCard';

import { Container, Content, Filters } from './styles'

const List: React.FC = () => {

    const months = [
        { value: '10', label: 'Outubro' },
        { value: '11', label: 'Novembro' },
        { value: '12', label: 'Dezembro' }
    ];

    const years = [
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
        { value: '2019', label: '2019' }
    ];
    
    return (
        <Container>
            <ContentHeader title="List" lineColor="#F7931B">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recorrente">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
            </Filters>

            <Content>
                <OperationCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2020"
                    value="R$ 130,00"
                />
                
            </Content>
        </Container>
    );
}

export default List;