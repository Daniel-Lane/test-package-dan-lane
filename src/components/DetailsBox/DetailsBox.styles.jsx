import styled from 'styled-components'
import { device, fontSizes } from '../../utils'

export const StyledDetailsBox = styled.div`
    .details-inner {
        background-color: ${props => props.theme.detailsBg};
        border-radius: ${props => props.theme.borderRadius};
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        padding: 20px;

        @media ${device.tablet} {
            gap: 20px;
        }

        .details-heading,
        .details-value {
            ${fontSizes.lg};
            font-weight: normal;
            margin-bottom: 5px;
        }

        .details-heading {
            color: ${props => props.theme.primaryText};
            ${fontSizes.sm};
            text-transform: capitalize;
        }

        .details-value {
            color: ${props => props.theme.primaryText};
            font-weight: bold;
        }
    }
`
