import React from 'react'
import { Label, PageWrapper } from '../../components'

export default {
    title: 'Atoms/Label',
    component: Label,
}

const DefaultTemplate = args => (
    <PageWrapper>
        <Label {...args} />
    </PageWrapper>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
    className: '',
    labelHidden: false,
    text: 'Filter by Name',
}
