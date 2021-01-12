import styled, { css } from 'styled-components'
import { button, colors, rgba } from '../../utils'

export const StyledButton = styled.button`
    background: ${props => props.theme.primary};
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.primaryButtonText};
    display: inline-block;
    font-family: 'PT Sans', sans-serif;
    font-size: ${props =>
        props.size ? button.sizes[props.size].fontSize : '16px'};
    font-weight: normal;
    height: auto;
    letter-spacing: 1px;
    margin: ${props => (props.margin ? props.margin : 0)};
    min-width: 80px;
    opacity: ${props => (props.disabled ? 0.9 : 1)};
    outline: none;
    padding: ${props =>
        props.size
            ? button.sizes[props.size].padding
            : button.sizes.padding.medium};
    position: relative;
    text-align: center;
    text-shadow: none;
    transition: background-color 0.4s ease, border-color 0.4s ease,
        box-shadow 0.4s ease;
    -webkit-appearance: none;
    width: ${props => (props.fullWidth ? '100%' : 'auto')};

    @keyframes infinite-spin {
        0% {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
        }
    }

    svg {
        height: auto;
        margin-right: ${props => (props.iconPosition === 'left' ? '10px' : 0)};
        margin-left: ${props => (props.iconPosition === 'right' ? '10px' : 0)};
        margin-top: -2px;
        width: ${props => (props.size ? button.iconSize[props.size] : '')};
    }

    .button-loading {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 5px;
    }

    .loading-spinner {
        -webkit-animation-duration: 0.8s;
        animation-duration: 0.8s;
        -webkit-animation-name: infinite-spin;
        animation-name: infinite-spin;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: cubic-bezier(0.63, 0.26, 0.54, 0.69);
        animation-timing-function: cubic-bezier(0.63, 0.26, 0.54, 0.69);
        background-color: transparent;
        border: 2px solid transparent;
        border-left: 2px solid ${props => props.theme.buttonLoading};
        border-top: 2px solid ${props => props.theme.buttonLoading};
        border-bottom: 2px solid ${props => props.theme.buttonLoading};
        border-radius: 50px;
        display: inline-block;
        height: 14px;
        padding: 0;
        -webkit-transition: ease-in 0.3s all;
        transition: ease-in 0.3s all;
        width: 14px;
    }

    &:hover {
        cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
        opacity: 0.9;
    }

    &:focus {
        outline: none;
    }
`

export const Solid = css`
    background: ${props => props.theme[props.color]};
    border: 2px solid ${props => props.theme[props.color]};
    color: ${props => props.theme.primaryButtonText};

    &:focus-visible {
        border-color: ${props => props.theme[props.color]};
        box-shadow: ${props =>
            `0 0 0 .2rem ${rgba(props.theme[props.color], 0.6)}`};
    }

    .button-loading {
        background: ${props => props.theme[props.color]};
    }
`

export const Outlined = css`
    background: transparent;
    border: 2px solid ${props => props.theme[props.color]};
    color: ${props => props.theme[props.color]};

    &:hover {
        background: ${props => props.theme[props.color]};
        color: ${props => props.theme.secondaryButtonTextHvr};
        cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    }

    &:focus-visible {
        border-color: ${props => props.theme[props.color]};
        box-shadow: ${props =>
            `0 0 0 .2rem ${rgba(props.theme[props.color], 0.6)}`};
    }

    .button-loading {
        background: ${props => props.theme[props.color]};
    }
`

export const Text = css`
    background: transparent;
    border: 2px solid transparent;
    color: ${props => props.theme[props.color]};

    &:hover {
        background: ${colors.grey.a};
    }

    &:focus-visible {
        border-color: ${props => props.theme[props.color]};
        box-shadow: ${props =>
            `0 0 0 .2rem ${rgba(props.theme[props.color], 0.6)}`};
    }

    .button-loading {
        background: ${props => props.theme[props.color]};
    }
`

export const StyledButtonRow = styled.div`
    display: grid;
    gap: ${props => props.gap};
    grid-auto-flow: column;
    justify-content: ${props =>
        props.alignItems ? button.positioning[props.alignItems] : 'flex-start'};
`
