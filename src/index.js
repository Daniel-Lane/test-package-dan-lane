import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton, Solid, Outlined, Text } from './Button.styles'

const handleVariant = variant => {
    switch (variant) {
        case 'outlined':
            return Outlined
        case 'text':
            return Text
        default:
            return Solid
    }
}

const Button = ({
    color,
    disabled,
    fullWidth,
    id,
    icon,
    iconPosition,
    isLoading,
    onClick,
    size,
    text,
    variant,
}) => (
    <StyledButton
        aria-label={`Aria ${id}`}
        color={color}
        css={handleVariant(variant)}
        disabled={!!(disabled || isLoading)}
        fullWidth={fullWidth}
        iconPosition={iconPosition}
        onClick={onClick}
        size={size}
    >
        <>
            {isLoading ? (
                <span className="button-loading">
                    <span className="loading-spinner" />
                </span>
            ) : null}
            {iconPosition === 'left' ? icon : null}
            {text}
            {iconPosition === 'right' ? icon : null}
        </>
    </StyledButton>
)

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    text: PropTypes.string,
    variant: PropTypes.oneOf(['solid', 'outlined', 'text']),
}

Button.defaultProps = {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    iconPosition: 'left',
    isLoading: false,
    size: 'medium',
    text: null,
    variant: 'solid',
}

export default Button