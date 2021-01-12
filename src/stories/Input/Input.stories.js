import React from 'react'
import { Input, PageWrapper } from '../../components'

export default {
    title: 'Atoms/Input',
    component: Input,
}

const DefaultTemplate = args => (
    <PageWrapper>
        <Input {...args} />
    </PageWrapper>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
    accessibilityId: 'Storybook Input',
    className: 'Storybook-input',
    defaultValue: '',
    disabled: false,
    id: 'Storybook Test Input',
    placeholder: 'Filter by SKU',
    type: 'text',
}
