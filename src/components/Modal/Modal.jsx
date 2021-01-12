import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useGetKeyboardFocusableElements, useTrapFocus } from '../../hooks'
import { Portal } from '../Portal'
import {
    StyledModal,
    ModalInner,
    ModalHeader,
    ModalCloseButton,
    ModalContent,
} from './Modal.styles'
import CloseIcon from '../../assets/svg/CloseIcon'
import { noScroll } from '../../utils'

export const Modal = ({
    ariaDescribedBy,
    ariaLabelledBy,
    children,
    modalOpen,
    title,
    setModalOpen,
    size,
}) => {
    const currentModalRef = useRef(null)
    const modalTrapFocus = useTrapFocus(currentModalRef)
    const getKeyboardFocusElements = useGetKeyboardFocusableElements()

    const handleModalClose = () => {
        setModalOpen(!modalOpen)
    }

    const handleOuterModalClose = useCallback(
        e => {
            const isOutside = !e.target.closest('.modal-inner')
            if (isOutside && modalOpen) setModalOpen(!modalOpen)
        },
        [modalOpen, setModalOpen]
    )

    const handleEscClose = useCallback(
        e => {
            if (e.keyCode === 27 && modalOpen) setModalOpen(!modalOpen)
        },
        [modalOpen, setModalOpen]
    )

    useEffect(() => {
        if (modalOpen) {
            // 1. Add no scroll styles to body
            document.body.style = noScroll
            // 2. Add focus trap
            modalTrapFocus()
            window.addEventListener('keydown', handleEscClose)
            window.addEventListener('click', handleOuterModalClose)
        } else {
            document.body.removeAttribute('style')
            getKeyboardFocusElements.forEach(x => x.removeAttribute('tabIndex'))
            window.removeEventListener('keydown', handleEscClose)
            window.removeEventListener('click', handleOuterModalClose)
        }
        return () => {
            window.removeEventListener('click', handleOuterModalClose)
            window.removeEventListener('keydown', handleEscClose)
        }
    }, [modalOpen])

    return (
        <>
            {modalOpen && (
                <Portal id="modal">
                    <StyledModal
                        aria-describedby={ariaDescribedBy}
                        aria-labelledby={ariaLabelledBy}
                        aria-modal="true"
                        id={ariaDescribedBy}
                        modalOpen={modalOpen}
                        ref={currentModalRef}
                        role="dialog"
                    >
                        <ModalInner className="modal-inner" size={size}>
                            <ModalHeader>
                                <h2 id={ariaDescribedBy}>{title}</h2>
                                <ModalCloseButton
                                    onClick={handleModalClose}
                                    type="button"
                                >
                                    <CloseIcon />
                                </ModalCloseButton>
                            </ModalHeader>
                            <ModalContent id={ariaDescribedBy}>
                                {children}
                            </ModalContent>
                        </ModalInner>
                    </StyledModal>
                </Portal>
            )}
        </>
    )
}

Modal.propTypes = {
    ariaLabelledBy: PropTypes.string.isRequired,
    ariaDescribedBy: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    modalOpen: PropTypes.bool,
    setModalOpen: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge', 'xxLarge']),
    title: PropTypes.string,
}
