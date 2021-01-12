import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel } from './Label.styles'

export const Label = ({ className, text }) => (
    <StyledLabel className={className}>{text}</StyledLabel>
)

Label.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
}

Label.defaultProps = {
    className: '',
}
