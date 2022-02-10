import React from 'react';

import { 
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';

interface IToggleProps {
    labelEsquerda: string;
    labelDireita: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
    labelEsquerda, labelDireita, checked, onChange
}) => {
    
    return (
        <Container>
            <ToggleLabel>{labelEsquerda}</ToggleLabel>
            <ToggleSelector 
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onHandleColor={'#fff'}
                offHandleColor={'#121212'}
                onChange={onChange}
            />
            <ToggleLabel>{labelDireita}</ToggleLabel>
        </Container>)
}

export default Toggle;