import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import OperationCard from '../../components/OperationCard';

import { Container, Content } from './styles'

const List: React.FC = () => {

    const options = [
        { value: 'Vinicius', label: 'Vinicius' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' }
    ];
    
    return (
        <Container>
            <ContentHeader title="List" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>

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