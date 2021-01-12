import React from 'react'
import PropTypes from 'prop-types'
import { StyledButtonRow } from './Button.styles'

export const ButtonRow = ({ alignItems, children, gap }) => (
    <StyledButtonRow alignItems={alignItems} gap={gap}>
        {children}
    </StyledButtonRow>
)

ButtonRow.propTypes = {
    alignItems: PropTypes.oneOf([
        'left',
        'center',
        'right',
        'space_around',
        'space_between',
    ]),
    children: PropTypes.node.isRequired,
    gap: PropTypes.string,
}
