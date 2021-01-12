import React from 'react'
import PropTypes from 'prop-types'
import { StyledGrid, StyledGridItem } from './Grid.styles'

export const Grid = ({ as, children, columns, gap, style }) => (
    <StyledGrid as={as} columns={columns} gap={gap} style={style}>
        {children}
    </StyledGrid>
)

export const GridItem = ({ as, children, sm, md, lg, style }) => (
    <StyledGridItem as={as} style={style} sm={sm} md={md} lg={lg}>
        {children}
    </StyledGridItem>
)

Grid.propTypes = {
    as: PropTypes.string,
    children: PropTypes.node.isRequired,
    columns: PropTypes.string,
    gap: PropTypes.string,
    style: PropTypes.object,
}

Grid.defaultProps = {
    as: 'div',
    columns: '12',
    gap: null,
}

GridItem.propTypes = {
    as: PropTypes.string,
    children: PropTypes.node.isRequired,
    lg: PropTypes.string,
    md: PropTypes.string,
    sm: PropTypes.string,
    style: PropTypes.object,
}

GridItem.defaultProps = {
    as: 'div',
}
