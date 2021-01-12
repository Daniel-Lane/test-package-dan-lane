import React from 'react'

import { PageTitle, PageWrapper } from '../../components'

export default {
    title: 'Molecules/PageTitle',
    component: PageTitle,
}

const Template = args => (
    <PageWrapper>
        <PageTitle {...args} />
    </PageWrapper>
)

export const Default = Template.bind({})
Default.args = {
    documentTitle: '12876',
    pageTitle: 'ASN Details',
}
