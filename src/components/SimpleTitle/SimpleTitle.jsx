import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 40px;
    color:${props => props.theme.primary};
`

export const SimpleTitle = ({ color }) => (
    <Title >
        This is an example title using styled components and themes
    </Title>
)