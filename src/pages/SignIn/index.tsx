import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import {
    Container,
    Logo,
    Form,
    FormTitle
} from './styles'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, senha)}>
                <FormTitle>Entrar</FormTitle>

                <Input type="email" required placeholder="email" onChange={ (e) => setEmail(e.target.value) } />
                <Input type="password" required placeholder="senha" onChange={ (e) => setSenha(e.target.value) } />
                <Button type="submit">Acessar</Button>

            </Form>
        </Container>
    );
}

export default SignIn;