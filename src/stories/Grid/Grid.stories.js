import React from 'react'
import { Grid, GridItem, PageWrapper } from '../../components'

export default {
    title: 'Layout/Grid',
    component: Grid,
    subComponent: GridItem,
    parameters: {
        componentSubtitle:
            '12 column grid with t-shirt size props to target different sceen widths.',
    },
}

const ExampleGridStyle = {
    alignItems: 'center',
    background: '#e6e6e6',
    display: 'flex',
    border: '1px solid lightgrey',
    justifyContent: 'center',
    padding: '8px',
}

const DefaultTemplate = args => (
    <PageWrapper>
        <Grid {...args}>
            <GridItem style={ExampleGridStyle} sm="12" md="4" lg="4">
                sml=12, md=4, lg=4
            </GridItem>
            <GridItem style={ExampleGridStyle} sm="12" md="4" lg="4">
                sml=12, md=4, lg=4
            </GridItem>
            <GridItem style={ExampleGridStyle} sm="12" md="4" lg="4">
                sml=12, md=4, lg=4
            </GridItem>

            <GridItem style={ExampleGridStyle} sm="12" md="6" lg="8">
                sml=12, md=6, lg=8
            </GridItem>
            <GridItem style={ExampleGridStyle} sm="12" md="4" lg="2">
                sml=12, md=4, lg=2
            </GridItem>
            <GridItem style={ExampleGridStyle} sm="12" md="2" lg="2">
                sml=12, md=2, lg=2
            </GridItem>

            <GridItem style={ExampleGridStyle} sm="12" md="6" lg="4">
                sml=12, md=6, lg=4
            </GridItem>
            <GridItem style={ExampleGridStyle} sm="12" md="6" lg="8">
                sml=12, md=6, lg=8
            </GridItem>
        </Grid>
    </PageWrapper>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
    columns: '12',
    gap: '0',
}
