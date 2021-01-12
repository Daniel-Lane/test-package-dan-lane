import styled from 'styled-components'
import { popoverPositioning } from '../../utils'

export const StyledOptionsMenu = styled.div`
    background: ${props => props.theme.optionsMenuBg};
    border: 1px solid ${props => props.theme.optionsMenuBorder};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.tooltipText};
    display: flex;
    flex-direction: column;
    padding: 0;
    position: absolute;
    z-index: 30;

    button {
        text-align: left;
    }
`

export const StyledArrow = styled.div`
    background: ${props => props.theme.optionsMenuBg};
    bottom: ${props => popoverPositioning[props.arrowPosition].bottom};
    display: ${props => (props.arrowPosition ? 'block' : 'none')};
    height: 10px;
    left: ${props => popoverPositioning[props.arrowPosition].left};
    opacity: 0.98;
    position: absolute;
    pointer-events: ${props => (props.optionsMenuOpen ? 'all' : 'none')};
    right: ${props => popoverPositioning[props.arrowPosition].right};
    top: ${props => popoverPositioning[props.arrowPosition].top};
    transform: rotate(45deg);
    width: 10px;
    visibility: ${props => (props.optionsMenuOpen ? 'visible' : 'hidden')};
    z-index: -1;

    &:after {
        background: ${props => props.theme.optionsMenuBg};
        content: '';
        position: absolute;
        height: 10px;
        width: 10px;
    }
`

export const StyledOverlay = styled.div`
    background: ${props => props.theme.overlay};
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
`
