import React, { useState } from 'react'
import { NotificationModal, Modal, Button } from '../../components'

export default {
    title: 'Molecules/Modal',
    component: Modal,
}

const DefaultTemplate = args => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleButtonClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <>
            <Button
                color="primary"
                id="Open modal example"
                onClick={handleButtonClick}
                size="medium"
                text="Open modal"
                variant="solid"
            />
            <Modal {...args} modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <div>
                    <h3>Modal Inner Content</h3>
                    <p>Modal accepts any child component</p>
                    <p>Default max width sizes are:</p>
                    <ul>
                        <li>Small - 400px</li>
                        <li>Medium - 600px</li>
                        <li>Large - 800px</li>
                        <li>XX Large - 1000px</li>
                        <li>XXX Large - 1200px</li>
                    </ul>
                </div>
            </Modal>
        </>
    )
}

export const Default = DefaultTemplate.bind({})
Default.args = {
    ariaDescribedBy: 'Default Modal',
    ariaLabelledBy: 'Default Modal',
    title: 'Default Modal',
    size: 'medium',
}

const NotificationTemplate = args => {
    const [notificationModalOpen, setNotificationModalOpen] = useState(false)

    const handleButtonClick = () => {
        setNotificationModalOpen(!notificationModalOpen)
    }

    const handleNotificationModalCancel = () => {
        setNotificationModalOpen(!notificationModalOpen)
        // Additional actions...
    }

    const handleNotificationModalConfirm = () => {
        setNotificationModalOpen(!notificationModalOpen)
        // Additional actions...
    }

    return (
        <>
            <Button
                color="primary"
                id="Open modal button"
                onClick={handleButtonClick}
                size="medium"
                text="Open notification modal"
                variant="solid"
            />
            <NotificationModal
                {...args}
                onCancel={handleNotificationModalCancel}
                onConfirm={handleNotificationModalConfirm}
                modalOpen={notificationModalOpen}
                setModalOpen={setNotificationModalOpen}
            />
        </>
    )
}

export const Notification = NotificationTemplate.bind({})
Notification.args = {
    ariaDescribedBy: 'Default Modal',
    ariaLabelledBy: 'Default Modal',
    size: 'medium',
    text:
        'There are unsaved changes on this page, are you sure you want to navigate away?',
    title: 'Changes have been made',
}
