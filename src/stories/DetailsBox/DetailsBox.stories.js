import React from 'react'

import { DetailsBox, PageWrapper } from '../../components'
import testData from '../../assets/data/asnDetailData.json'

export default {
    title: 'Molecules/DetailsBox',
    component: DetailsBox,
}

const DefaultTemplate = args => (
    <PageWrapper>
        <DetailsBox {...args} />
    </PageWrapper>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
    detailsBoxData: testData,
}
