import React from 'react';
import { useState } from 'react';

import { 
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';

const Toggle: React.FC = () => {
    const [online, setOnline] = useState(false);
    
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector 
                checked={!online}
                uncheckedIcon={false}
                checkedIcon={false}
                onHandleColor={'#fff'}
                offHandleColor={'#121212'}
                onChange={() => setOnline(!online)}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>)
}

export default Toggle;