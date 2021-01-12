import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Portal } from '../Portal'
import { useGetKeyboardFocusableElements, useTrapFocus } from '../../hooks'
import {
    StyledOptionsMenu,
    StyledArrow,
    StyledOverlay,
} from './OptionsMenu.styles'
import { noScroll } from '../../utils'

export const OptionsMenu = ({
    arrowPosition,
    children,
    onClick,
    optionsMenuOpen,
    placement,
    referenceElement,
    setOptionsMenuOpen,
}) => {
    const [coords, setCoords] = useState({})
    const [menuHeight, setMenuHeight] = useState(null)
    const [menuWidth, setMenuWidth] = useState(null)

    const elRef = useRef(null)
    const menuRef = useRef(null)
    const overlayRef = useRef(null)
    const trapFocus = useTrapFocus(menuRef)
    const getKeyboardFocusElements = useGetKeyboardFocusableElements()

    const getCoords = useCallback(
        rect => {
            const topPosition = rect.y + window.scrollY - menuHeight - 10
            const bottomPosition = rect.y + rect.height + window.scrollY + 10

            switch (placement) {
                case 'topLeft':
                    return {
                        left: rect.x,
                        top: topPosition,
                    }
                case 'topRight':
                    return {
                        left: rect.x + rect.width - menuWidth,
                        top: topPosition,
                    }
                case 'bottomLeft':
                    return {
                        left: rect.x,
                        top: bottomPosition,
                    }
                case 'bottomCenter':
                    return {
                        left: rect.x + rect.width / 2 - menuWidth / 2,
                        top: bottomPosition,
                    }
                case 'bottomRight':
                    return {
                        left: rect.x + rect.width - menuWidth,
                        top: bottomPosition,
                    }
                default:
                    // default: topCenter
                    return {
                        left: rect.x + rect.width / 2 - menuWidth / 2,
                        top: topPosition,
                    }
            }
        },
        [placement, menuHeight, menuWidth]
    )

    const handleOverlayClick = () => {
        setOptionsMenuOpen(false)
    }

    const handleEscClose = useCallback(
        e => {
            if (e.keyCode === 27 && optionsMenuOpen) setOptionsMenuOpen(false)
        },
        [optionsMenuOpen, setOptionsMenuOpen]
    )

    const updateCoords = useCallback(
        el => {
            const rect = el.current.getBoundingClientRect()

            setCoords(getCoords(rect))
        },
        [getCoords]
    )

    useEffect(() => {
        if (menuRef.current) {
            setMenuHeight(menuRef.current.offsetHeight)
            setMenuWidth(menuRef.current.scrollWidth)
            if (menuWidth && menuHeight) updateCoords(elRef)
        }

        // Handle body no-scroll
        if (menuRef.current && optionsMenuOpen) {
            document.body.style = noScroll
            trapFocus()
        } else {
            document.body.removeAttribute('style')
            getKeyboardFocusElements.forEach(x => x.removeAttribute('tabIndex'))
        }

        // Handle Esc key press
        if (optionsMenuOpen) window.addEventListener('keydown', handleEscClose)
        else window.removeEventListener('keydown', handleEscClose)

        return () => {
            window.removeEventListener('keydown', handleEscClose)
        }
    }, [
        getCoords,
        handleEscClose,
        menuHeight,
        menuWidth,
        optionsMenuOpen,
        placement,
        updateCoords,
        trapFocus,
    ])

    return (
        <>
            {optionsMenuOpen && (
                <Portal id="options-menu">
                    <StyledOptionsMenu
                        optionsMenuOpen={optionsMenuOpen}
                        aria-label="Options menu"
                        ref={menuRef}
                        role="dialog"
                        style={{ ...coords }}
                        menuWidth={menuWidth}
                        updateCoords={() => updateCoords(elRef)}
                    >
                        {children}
                        <StyledArrow
                            arrowPosition={arrowPosition}
                            optionsMenuOpen={optionsMenuOpen}
                        />
                    </StyledOptionsMenu>
                    {optionsMenuOpen && (
                        <StyledOverlay
                            className="menu-outer"
                            ref={overlayRef}
                            onClick={handleOverlayClick}
                        />
                    )}
                </Portal>
            )}
            <span aria-describedby="Options menu" onClick={onClick} ref={elRef}>
                {referenceElement}
            </span>
        </>
    )
}

OptionsMenu.propTypes = {
    arrowPosition: PropTypes.oneOf([
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight',
    ]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    optionsMenuOpen: PropTypes.bool,
    placement: PropTypes.oneOf([
        'bottomCenter',
        'bottomLeft',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight',
    ]),
    referenceElement: PropTypes.any,
    setOptionsMenuOpen: PropTypes.func,
}

OptionsMenu.defaultProps = {
    arrowPosition: 'topLeft',
    setOptionsMenuOpen: false,
    placement: 'bottomLeft',
}
