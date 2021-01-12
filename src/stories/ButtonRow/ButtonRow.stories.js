import React from 'react'

import { Button, ButtonRow, PageWrapper } from '../../components'

export default {
    title: 'Molecules/ButtonRow',
    component: ButtonRow,
}

const PrimaryTemplate = args => (
    <PageWrapper>
        <ButtonRow {...args}>
            <Button
                color="primary"
                id="Accept button"
                size="medium"
                text="Okay"
                variant="solid"
            />
            <Button
                color="secondary"
                id="Cancel button"
                size="medium"
                text="Cancel"
                variant="outlined"
            />
        </ButtonRow>
    </PageWrapper>
)

export const Default = PrimaryTemplate.bind({})
Default.args = {
    alignItems: 'left',
    gap: '20px',
}
