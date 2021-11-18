import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: '#121212',
        offColor: '#f0edf2'
    }))<ReactSwitchProps>`
    margin: 0 7px;
`;