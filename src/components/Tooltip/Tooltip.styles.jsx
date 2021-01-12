import styled from 'styled-components'
import { fontSizes, popoverPositioning } from '../../utils'

export const StyledTooltip = styled.div`
    background: ${props => props.theme.tooltipBg};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.tooltipText};
    display: block;
    ${fontSizes.xs};
    line-height: 1.5;
    opacity: ${props => (props.tooltipVisible ? '0.95' : 0)};
    max-width: 320px;
    padding: 5px 15px;
    pointer-events: ${props => (props.tooltipVisible ? 'all' : 'none')};
    position: absolute;
    visibility: ${props => (props.tooltipVisible ? 'visible' : 'hidden')};
    z-index: 30;
`

export const StyledTooltipArrow = styled.div`
    background: ${props => props.theme.tooltipBg};
    bottom: ${props => popoverPositioning[props.arrowPosition].bottom};
    display: ${props => (props.arrowPosition ? 'block' : 'none')};
    height: 10px;
    left: ${props => popoverPositioning[props.arrowPosition].left};
    opacity: 0.98;
    position: absolute;
    right: ${props => popoverPositioning[props.arrowPosition].right};
    top: ${props => popoverPositioning[props.arrowPosition].top};
    transform: rotate(45deg);
    width: 10px;
    z-index: -1;

    &:after {
        background: ${props => props.theme.tooltipBg};
        content: '';
        position: absolute;
        height: 10px;
        width: 10px;
    }
`
