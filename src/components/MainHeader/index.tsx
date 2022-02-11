import React, { useMemo, useState } from 'react';

import emojis from '../../utils/emojis';

import { useTema } from '../../hooks/theme';
import Toggle from '../Toggle';

import { 
    Container,
    Profile,
    Welcome,
    UserName,
} from './styles'

const MainHeader: React.FC = () => {
    const { temaToggle, tema } = useTema(),
        [temaDark, setTemaDark] = useState(() => tema.title === 'dark' ? true : false);

    const trataTrocaTema = () => {
        setTemaDark(!temaDark)
        temaToggle();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);
    return (
        <Container>
            <Toggle labelEsquerda="Light" labelDireita="Dark" checked={temaDark} onChange={trataTrocaTema} />

            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Vinicius Elias</UserName>
            </Profile>
        </ Container>
    );
}

export default MainHeader;