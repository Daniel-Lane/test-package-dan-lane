import React from 'react'
import PropTypes from 'prop-types'
import { StyledPageWrapper } from './PageWrapper.styles'

export const PageWrapper = ({ children }) => (
    <StyledPageWrapper>{children}</StyledPageWrapper>
)

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}
