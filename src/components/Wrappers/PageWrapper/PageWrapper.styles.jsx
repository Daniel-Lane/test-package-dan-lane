import styled from 'styled-components'
import { device } from '../../../utils'

export const StyledPageWrapper = styled.section`
    margin-left: auto;
    margin-right: auto;
    max-width: 1900px;
    padding-left: 1rem;
    padding-right: 1rem;

    @media ${device.tablet} {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`
