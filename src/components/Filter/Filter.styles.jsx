import styled from 'styled-components'
import { device } from '../../utils'

export const StyledFilter = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: ${props => props.theme.fontStack};
    margin: 0;
    width: 100%;

    @media ${device.tablet} {
        flex-direction: row;
    }
`
