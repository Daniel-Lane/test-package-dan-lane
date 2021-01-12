import styled from 'styled-components'
import { device, fontSizes } from '../../utils'

export const StyledLabel = styled.label`
    align-items: center;
    color: ${props => props.theme.primaryText};
    display: flex;
    ${fontSizes.lg};
    font-weight: 700;
    margin-bottom: 10px;
    margin-right: 0;

    @media ${device.tablet} {
        margin-bottom: 0;
        margin-right: 15px;
    }
`
