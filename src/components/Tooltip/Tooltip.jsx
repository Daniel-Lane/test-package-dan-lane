import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Portal } from '../Portal'
import { StyledTooltip, StyledTooltipArrow } from './Tooltip.styles'

export const Tooltip = ({
    arrowPosition,
    arrowStyle,
    children,
    disableMouseEvents,
    disableTooltip,
    placement,
    value,
    showTooltip,
    tooltipStyle,
}) => {
    const [coords, setCoords] = useState({})
    const [tooltipVisible, setTooltipVisible] = useState(showTooltip)
    const [tooltipHeight, setTooltipHeight] = useState(null)
    const [tooltipWidth, setTooltipWidth] = useState(null)

    const elRef = useRef(null)
    const tooltipRef = useRef(null)

    const getCoords = useCallback(
        rect => {
            const topPosition = rect.y + window.scrollY - tooltipHeight - 10
            const bottomPosition = rect.y + rect.height + window.scrollY + 10

            switch (placement) {
                case 'topLeft':
                    return {
                        left: rect.x,
                        top: topPosition,
                    }
                case 'topRight':
                    return {
                        left: rect.x + rect.width - tooltipWidth,
                        top: topPosition,
                    }
                case 'bottomLeft':
                    return {
                        left: rect.x,
                        top: bottomPosition,
                    }
                case 'bottomCenter':
                    return {
                        left: rect.x + rect.width / 2 - tooltipWidth / 2,
                        top: bottomPosition,
                    }
                case 'bottomRight':
                    return {
                        left: rect.x + rect.width - tooltipWidth,
                        top: bottomPosition,
                    }
                default:
                    // default: topCenter
                    return {
                        left: rect.x + rect.width / 2 - tooltipWidth / 2,
                        top: topPosition,
                    }
            }
        },
        [placement, tooltipHeight, tooltipWidth]
    )

    const handleMouseEnter = () => {
        setTooltipVisible(true)
    }

    const handleMouseLeave = () => {
        setTooltipVisible(false)
    }

    const handleMouseClick = () => {
        setTooltipVisible(!showTooltip)
    }

    const handleScroll = () => {
        setTooltipVisible(false)
    }

    const handleEscClose = useCallback(
        e => {
            if (e.keyCode === 27 && tooltipVisible)
                setTooltipVisible(!tooltipVisible)
        },
        [tooltipVisible, setTooltipVisible]
    )

    const updateTooltipCoords = useCallback(
        el => {
            const rect = el.current.getBoundingClientRect()

            setCoords(getCoords(rect))
        },
        [getCoords]
    )

    useEffect(() => {
        if (tooltipRef.current) {
            setTooltipHeight(tooltipRef.current.offsetHeight)
            setTooltipWidth(tooltipRef.current.scrollWidth)
            if (tooltipWidth && tooltipHeight) updateTooltipCoords(elRef)
        }

        if (tooltipVisible) window.addEventListener('keydown', handleEscClose)
        else window.removeEventListener('keydown', handleEscClose)

        return () => {
            window.removeEventListener('keydown', handleEscClose)
        }
    }, [
        getCoords,
        handleEscClose,
        placement,
        tooltipVisible,
        tooltipHeight,
        tooltipWidth,
        updateTooltipCoords,
    ])

    // Remove tooltip if user scrolls to make sure
    // tooltip doesn't stay visible in the incorrect
    // position.
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [tooltipVisible])

    // Handle showTooltip prop updates. Eg. button click
    // from button outside of tooltip.
    useEffect(() => {
        setTooltipVisible(showTooltip)
    }, [showTooltip])

    return (
        <>
            {tooltipVisible && !disableTooltip && (
                <Portal id="tooltip">
                    <StyledTooltip
                        aria-label="Tooltip"
                        arrowPosition={arrowPosition}
                        css={tooltipStyle}
                        ref={tooltipRef}
                        role="tooltip"
                        tooltipVisible={tooltipVisible}
                        showTooltip={showTooltip}
                        style={{ ...coords }}
                        tooltipWidth={tooltipWidth}
                        updateTooltipCoords={() => updateTooltipCoords(elRef)}
                    >
                        {value}
                        <StyledTooltipArrow
                            arrowPosition={arrowPosition}
                            css={arrowStyle}
                        />
                    </StyledTooltip>
                </Portal>
            )}
            <span
                aria-describedby="tooltip"
                onMouseEnter={() =>
                    disableMouseEvents ? null : handleMouseEnter()
                }
                onMouseLeave={() =>
                    disableMouseEvents ? null : handleMouseLeave()
                }
                onClick={() => (disableMouseEvents ? null : handleMouseClick())}
                onFocus={() =>
                    disableMouseEvents ? null : setTooltipVisible(true)
                }
                onBlur={() =>
                    disableMouseEvents ? null : setTooltipVisible(false)
                }
                ref={elRef}
            >
                {children}
            </span>
        </>
    )
}

Tooltip.propTypes = {
    arrowPosition: PropTypes.oneOf([
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight',
    ]),
    arrowStyle: PropTypes.array,
    children: PropTypes.node.isRequired,
    disableMouseEvents: PropTypes.bool,
    disableTooltip: PropTypes.bool,
    placement: PropTypes.oneOf([
        'bottomCenter',
        'bottomLeft',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight',
    ]),
    value: PropTypes.node,
    showTooltip: PropTypes.bool,
    tooltipStyle: PropTypes.array,
}

Tooltip.defaultProps = {
    arrowPosition: 'bottom_left',
    disableTooltip: false,
    placement: 'top-center',
    showTooltip: false,
}
