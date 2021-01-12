import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from './Modal'
import { Button, ButtonRow } from '../Button'

export const NotificationModal = ({
    ariaDescribedBy,
    ariaLabelledBy,
    modalOpen,
    setModalOpen,
    text,
    onCancel,
    onConfirm,
    size,
    title,
}) => (
    <Modal
        ariaDescribedBy={ariaDescribedBy}
        ariaLabelledBy={ariaLabelledBy}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        size={size}
        title={title}
    >
        <p>{text}</p>
        <ButtonRow alignItems="right" gap="20px">
            <Button
                color="primary"
                id={`${title} Modal button accept`}
                onClick={onConfirm}
                size="medium"
                text="Accept"
                variant="solid"
            />
            <Button
                color="secondary"
                id={`${title} Modal button cancel`}
                onClick={onCancel}
                size="medium"
                text="Cancel"
                variant="outlined"
            />
        </ButtonRow>
    </Modal>
)

NotificationModal.propTypes = {
    ariaLabelledBy: PropTypes.string.isRequired,
    ariaDescribedBy: PropTypes.string.isRequired,
    modalOpen: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge', 'xxLarge']),
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
}
