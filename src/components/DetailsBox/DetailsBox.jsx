import React from 'react'
import PropTypes from 'prop-types'
import { StyledDetailsBox } from './DetailsBox.styles'

export const DetailsBox = ({ detailsBoxData }) => (
    <StyledDetailsBox>
        <div className="details-inner">
            {detailsBoxData.map(item => (
                <div key={item.heading}>
                    <h3 className="details-heading">{item.heading}</h3>
                    <p className="details-value">{item.value}</p>
                </div>
            ))}
        </div>
    </StyledDetailsBox>
)

DetailsBox.propTypes = {
    detailsBoxData: PropTypes.array,
}
