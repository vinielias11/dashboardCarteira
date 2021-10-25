import React from 'react';

import { 
    Container,
    Tag 
} from './styles'

interface IOperationCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    value: string;
}

const OperationCard: React.FC<IOperationCardProps> = ({
    tagColor,
    title,
    subtitle,
    value
}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{value}</h3>
        </Container>
    );
}

export default OperationCard;