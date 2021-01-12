import styled from 'styled-components'
import { device, fontSizes } from '../../utils'

export const TitleContainer = styled.div`
    color: ${props => props.theme.primaryText};
    padding: 15px 0;

    h1 {
        ${fontSizes.xl5};
        font-weight: normal;
        margin: 0;

        @media ${device.tablet} {
            ${fontSizes.xl9};
        }
    }

    span {
        font-weight: bold;
    }

    svg {
        margin: -8px 15px 0;
        vertical-align: middle;

        path {
            stroke: ${props => props.theme.primaryText};
        }
    }
`
