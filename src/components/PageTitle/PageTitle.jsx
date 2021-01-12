import React from 'react'
import PropTypes from 'prop-types'
import { TitleContainer } from './PageTitle.styles'
import TitleSeparator from '../../assets/svg/TitleSeparator'

export const PageTitle = ({ documentTitle, pageTitle }) => (
    <TitleContainer>
        <h1>
            {pageTitle}
            <TitleSeparator />
            <span>{documentTitle}</span>
        </h1>
    </TitleContainer>
)

PageTitle.propTypes = {
    documentTitle: PropTypes.string,
    pageTitle: PropTypes.string,
}
