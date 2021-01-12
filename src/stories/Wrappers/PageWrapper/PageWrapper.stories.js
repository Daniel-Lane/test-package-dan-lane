import React from 'react'
import styled from 'styled-components'
import { PageWrapper } from '../../../components/Wrappers/PageWrapper'
import { PageTitle } from '../../../components'

export default {
    title: 'Wrappers/PageWrapper',
    component: PageWrapper,
}

const StoryFullHeight = styled.div`
    height: 100vh;
`

const PageWrapperStoryInner = styled.div`
    border-left: 1px dashed lightgrey;
    border-right: 1px dashed lightgrey;
    height: 100vh;
`

const Template = args => (
    <StoryFullHeight>
        <PageWrapper {...args}>
            <PageWrapperStoryInner>
                <PageTitle
                    documentTitle="Additional Style Added for Example"
                    pageTitle="Test Title"
                />
            </PageWrapperStoryInner>
        </PageWrapper>
    </StoryFullHeight>
)

export const Default = Template.bind({})
