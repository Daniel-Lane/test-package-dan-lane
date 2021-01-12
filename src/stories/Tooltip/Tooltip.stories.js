import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Grid, GridItem, PageWrapper, Tooltip } from '../../components'

export default {
    title: 'Atoms/Tooltip',
    component: Tooltip,
}

const DummyTableCell = styled.span`
    background: #f2f2f2;
    display: inline-block;
    overflow: hidden;
    padding: 12px 10px !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100px;
`

const DummyTableCellLarge = styled(DummyTableCell)`
    width: 350px;
`

const Spacer = styled.div`
    margin-bottom: 30px;
`

const DummyBox = styled.div`
    background: #92d29d;
    border-radius: 5px;
    height: 100px;
    margin-bottom: 30px;
    width: 100%;
`

const DefaultTemplate = args => (
    <PageWrapper>
        <Spacer />

        <p style={{ fontStyle: 'italic' }}>
            NB: Default tooltip will always show when hovered over child element
        </p>

        <Tooltip {...args}>
            <span>Hover over this text to show generic tooltip</span>
        </Tooltip>
        <div style={{ marginTop: 60 }} />
    </PageWrapper>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
    arrowPosition: 'bottomCenter',
    placement: 'topCenter',
    value: 'A little bit more information',
}

const SecondaryTemplate = args => (
    <PageWrapper>
        <Spacer />

        <p>
            A good example of where to use the disabled tooltip would be within
            the React Tables. As the table cells are set to overflow with an
            ellipsis when the content is too big for the cell, we can disable
            the tooltip if the content is fully visible within the cell. If,
            when we resize the column, the cell contents become truncated we can
            then show the tooltip.
        </p>

        <h3>Overflowing Div</h3>
        <Spacer />
        <p>
            By default this tooltip will show as the content is overflowing the
            bounds of the div.
        </p>
        <DummyTableCell>
            <Tooltip {...args}>
                <span>12 Stainless Steel 25mm Disability Grab Rail</span>
            </Tooltip>
        </DummyTableCell>

        <Spacer />

        <h3>Non Overflowing Div</h3>

        <Spacer />

        <p>
            By default this tooltip will not show as the content is not
            overflowing the bounds of the div.
        </p>

        <DummyTableCellLarge>
            <Tooltip {...args} disableTooltip>
                <span>12 Stainless Steel 25mm Disability Grab Rail</span>
            </Tooltip>
        </DummyTableCellLarge>
        <div style={{ marginTop: 60 }} />
    </PageWrapper>
)

export const TooltipDisabled = SecondaryTemplate.bind({})
TooltipDisabled.args = {
    arrowPosition: 'bottomLeft',
    placement: 'topLeft',
    value: '12 Stainless Steel 25mm Disability Grab Rail',
}

const TertiaryTemplate = args => {
    const [showTooltip, setShowTooltip] = useState(false)

    const handleTooltipBtnClick = () => {
        setShowTooltip(!showTooltip)
    }

    return (
        <PageWrapper>
            <Spacer />

            <p>
                We can also set the mouse hover events to disabled in order to
                then use an onClick event to show the tooltip.
            </p>

            <Grid>
                <GridItem sm="12" md="1" lg="1">
                    <Tooltip
                        {...args}
                        disableMouseEvents
                        showTooltip={showTooltip}
                    >
                        <DummyBox />
                    </Tooltip>
                </GridItem>
            </Grid>

            <Button
                color="primary"
                id="Tooltip click demo"
                onClick={handleTooltipBtnClick}
                size="large"
                text="Click to show tooltip"
                variant="solid"
            />
        </PageWrapper>
    )
}

export const TooltipOnClick = TertiaryTemplate.bind({})
TooltipOnClick.args = {
    arrowPosition: 'bottomLeft',
    placement: 'topLeft',
    value: 'A little bit more information',
}
