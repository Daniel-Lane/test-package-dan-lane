import styled from 'styled-components'
import { device } from '../../utils'

export const StyledGrid = styled.div`
    display: grid;
    gap: ${props => (props.gap ? `${props.gap}px` : 0)};
    grid-template-columns: repeat(
        ${props => (props.columns ? props.columns : 12)},
        1fr
    );

    @media ${device.tablet} {
        grid-template-columns: repeat(
            ${props => (props.columns ? props.columns : 12)},
            1fr
        );
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(
            ${props => (props.columns ? props.columns : 12)},
            1fr
        );
    }
`

export const StyledGridItem = styled.div`
    flex-direction: column;
    grid-column: ${props => (props.sm ? `span ${props.sm}` : '1 / -1')};

    @media ${device.tablet} {
        grid-column: ${props => (props.md ? `span ${props.md}` : '1 / -1')};
    }

    @media ${device.desktop} {
        grid-column: ${props => (props.lg ? `span ${props.lg}` : '1 / -1')};
    }
`
