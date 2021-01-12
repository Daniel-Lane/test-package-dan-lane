import React from 'react'
import PropTypes from 'prop-types'
import {
    StyledToggle,
    StyledToggleInner,
    StyledToggleSwitch,
} from './Toggle.styles'

export const Toggle = ({ id, label, onClick, onToggle }) => (
    <StyledToggle>
        <label className="visually-hidden" htmlFor={id}>
            {label}
        </label>
        <StyledToggleInner
            aria-checked={onToggle}
            id={id}
            onClick={onClick}
            role="switch"
            toggled={onToggle}
            type="button"
        >
            <StyledToggleSwitch toggled={onToggle} />
        </StyledToggleInner>
    </StyledToggle>
)

Toggle.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
