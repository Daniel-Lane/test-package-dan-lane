import React, { useState } from 'react'
import { Toggle, PageWrapper } from '../../components'

export default {
    title: 'Atoms/Toggle',
    component: Toggle,
}

const DefaultTemplate = args => {
    const [isToggled, setIsToggled] = useState(false)

    const handleOnToggle = () => {
        setIsToggled(!isToggled)
    }

    return (
        <PageWrapper>
            <Toggle {...args} onClick={handleOnToggle} onToggle={isToggled} />
        </PageWrapper>
    )
}

export const Default = DefaultTemplate.bind({})
Default.args = {
    id: 'Storybook Toggle',
    label: 'Click to toggle',
}
