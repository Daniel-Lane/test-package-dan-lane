import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './Input.styles'

export const Input = ({
    accessibilityId,
    className,
    defaultValue,
    disabled,
    onChange,
    onKeyDown,
    placeholder,
    type,
}) => {
    const [state, setState] = useState(defaultValue)

    const handleChange = e => {
        setState(e.target.value)
        onChange(e.target.value)
    }

    return (
        <StyledInput
            className={className}
            disabled={disabled}
            id={accessibilityId}
            min={type === 'number' ? '0' : undefined}
            onChange={e => handleChange(e)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            type={type}
            value={state}
        />
    )
}

Input.propTypes = {
    accessibilityId: PropTypes.string.isRequired,
    className: PropTypes.string,
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
}

Input.defaultProps = {
    className: '',
    defaultValue: '',
    disabled: false,
    onChange: () => {},
    onKeyDown: () => {},
    placeholder: '',
    type: null,
}
