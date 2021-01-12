import styled from 'styled-components'
import { breakpoint, fontSizes, rgba } from '../../utils'
import { modalSizes } from '../../utils/variables'

export const StyledModal = styled.div`
    align-items: center;
    background-color: ${props => props.theme.overlay};
    bottom: 0;
    display: flex;
    font-family: inherit;
    justify-content: center;
    left: 0;
    opacity: ${props => (props.modalOpen ? '1' : '0')};
    pointer-events: ${props => (props.modalOpen ? 'all' : 'none')};
    position: fixed;
    right: 0;
    top: 0;
    transition: 0.3s ease;
    visibility: ${props => (props.modalOpen ? 'visible' : 'hidden')};
    z-index: 100;
`

export const ModalInner = styled.div`
    background: ${props => props.theme.modalBg};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.primaryText};
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    max-width: ${props =>
        props.size ? modalSizes[props.size] : modalSizes.small};
    position: relative;
    width: 100%;

    @media ${breakpoint(640)} {
        height: auto;
        max-height: 80%;
    }
`

export const ModalHeader = styled.div`
    background: ${props => props.theme.modalBg};
    border-radius: ${props => props.theme.borderRadius};
    flex-shrink: 0;
    margin-bottom: 20px;
    padding: 30px 15px 0;

    @media ${breakpoint(400)} {
        padding: 30px 20px 0;
    }

    h2 {
        color: ${props => props.theme.modalTitle};
        ${fontSizes.x7};
        padding-right: 35px;
        text-align: left;

        @media ${breakpoint(400)} {
            padding: 0 30px;
            text-align: center;
        }
    }
`

export const ModalCloseButton = styled.button`
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    height: 40px;
    justify-content: center;
    outline: none;
    padding: 14px;
    position: absolute;
    right: 10px;
    top: 10px;
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
    width: 40px;

    &:hover {
        background: ${props => props.theme.modalCloseHvr};
        cursor: pointer;

        svg path {
            fill: ${props => props.theme.modalCloseIconHvr};
        }
    }

    &:active {
        background: ${props => props.theme.modalCloseAct};

        svg path {
            fill: ${props => props.theme.modalCloseIconAct};
        }
    }

    &:focus-visible {
        border-color: ${props => props.theme.inputBorder};
        box-shadow: ${props => `0 0 0 .2rem ${rgba(props.theme.focus, 0.6)}`};
    }

    svg path {
        fill: ${props => props.theme.modalCloseIcon};
    }
`

export const ModalContent = styled.div`
    background: ${props => props.theme.modalBg};
    overflow: auto;
    padding: 0 15px 15px;

    @media ${breakpoint(400)} {
        margin-bottom: 5px;
        padding: 0 20px 20px;
    }
`
