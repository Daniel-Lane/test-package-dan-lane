import styled from 'styled-components'
import { rgba } from '../../utils'

export const StyledInput = styled.input`
    background-color: ${props => props.theme.inputBg};
    border: 1px solid ${props => props.theme.inputBorder};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.inputText};
    flex-grow: 1;
    font-family: inherit;
    height: 43px;
    outline: none;
    padding: 0 15px;
    transition: background-color 0.4s ease, border-color 0.4s ease,
        box-shadow 0.4s ease;

    &:focus-visible {
        border-color: ${props => props.theme.inputBorder};
        box-shadow: ${props => `0 0 0 .2rem ${rgba(props.theme.focus, 0.6)}`};
    }
`
