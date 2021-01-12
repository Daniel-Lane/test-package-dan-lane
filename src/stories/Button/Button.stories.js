import React from 'react'

import { Button, PageWrapper } from '../../components'
import SettingsIcon from '../../assets/svg/SettingsIcon'

export default {
    title: 'Atoms/Button',
    component: Button,
}

const PrimaryTemplate = args => (
    <PageWrapper>
        <Button {...args} />
    </PageWrapper>
)

export const Default = PrimaryTemplate.bind({})
Default.args = {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    id: 'Storybook button',
    isLoading: false,
    size: 'medium',
    text: 'Click me',
    variant: 'solid',
}

const SecondaryTemplate = args => (
    <PageWrapper>
        <Button {...args} />
    </PageWrapper>
)

export const Loading = SecondaryTemplate.bind({})
Loading.args = {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    id: 'Loading button',
    isLoading: true,
    size: 'medium',
    text: 'Click me',
    variant: 'solid',
}

const TertiaryTemplate = args => (
    <PageWrapper>
        <Button {...args} icon={<SettingsIcon color="white" />} />
    </PageWrapper>
)

export const WithIconLeft = TertiaryTemplate.bind({})
WithIconLeft.args = {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    iconPosition: 'left',
    id: 'Icon left button',
    isLoading: false,
    size: 'medium',
    text: 'Click me',
    variant: 'solid',
}

export const WithIconRight = TertiaryTemplate.bind({})
WithIconRight.args = {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    iconPosition: 'right',
    id: 'Icon right button',
    isLoading: false,
    size: 'medium',
    text: 'Click me',
    variant: 'solid',
}
