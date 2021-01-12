import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 40px;
    color: ${props => props.color};
`

Title.defaultProps = {
    color: 'pink'
}

export const SimpleTitle = () => (
    <Title color='blue' >
        This is an example title using styled components and themes
    </Title>
)