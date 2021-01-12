import styled from 'styled-components'
import { rgba } from '../../utils'

export const StyledToggle = styled.div`
    display: inline-block;
`

export const StyledToggleInner = styled.button`
    align-items: center;
    background-color: ${props =>
        props.toggled ? props.theme.toggledBg : props.theme.toggleBg};
    border: transparent;
    border-radius: 20px;
    display: flex;
    height: 30px;
    overflow: hidden;
    padding: 3px;
    position: relative;
    transform: translate3d(0, 0, 0);
    transition: 0.4s ease;
    outline: none;
    width: 60px;

    &:focus-visible {
        border-color: ${props => props.theme.inputBorder};
        box-shadow: ${props => `0 0 0 .2rem ${rgba(props.theme.focus, 0.6)}`};
    }
`

export const StyledToggleSwitch = styled.span`
    background-color: ${props => props.theme.toggleCircle};
    border: ${props => props.theme.toggleCircle};
    border-radius: 34px;
    box-shadow: 0 4px 4px rgb(156 156 156 / 25%);
    height: 22px;
    transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
    transition: 0.4s ease;
    transform: ${props =>
        props.toggled ? `translateX(${60 - 60 / 2}px)` : 'translateX(0px)'};
    width: 22px;
    z-index: 2;

    &:active {
        background-color: ${props => props.theme.toggleCircle};
    }
`
