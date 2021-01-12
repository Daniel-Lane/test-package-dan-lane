import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, OptionsMenu, PageWrapper } from '../../components'

export default {
    title: 'Molecules/OptionsMenu',
    component: OptionsMenu,
}

const ActionCellEllipsis = styled.button`
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    width: 40px;

    &:hover {
        background: #f2f2f2;
        cursor: pointer;
    }
`

const DefaultTemplate = args => {
    const [optionsMenuOpen, setOptionsMenuOpen] = useState(false)

    const handleClick = () => {
        setOptionsMenuOpen(!optionsMenuOpen)
    }

    const handleButtonClick = () => {
        setOptionsMenuOpen(!optionsMenuOpen)
    }

    return (
        <PageWrapper>
            <OptionsMenu
                {...args}
                arrowPosition="topLeft"
                optionsMenuOpen={optionsMenuOpen}
                placement="bottomLeft"
                referenceElement={
                    <ActionCellEllipsis onClick={handleClick} type="button">
                        ...
                    </ActionCellEllipsis>
                }
                setOptionsMenuOpen={setOptionsMenuOpen}
            >
                <Button
                    color="secondary"
                    id="Options menu - edit"
                    onClick={handleButtonClick}
                    text="Edit"
                    variant="text"
                />
                <Button
                    color="secondary"
                    id="Options menu - split"
                    onClick={handleButtonClick}
                    text="Split"
                    variant="text"
                />
                <Button
                    color="secondary"
                    id="Options menu - delete"
                    onClick={handleButtonClick}
                    text="Delete"
                    variant="text"
                />
            </OptionsMenu>
        </PageWrapper>
    )
}

export const Default = DefaultTemplate.bind({})
Default.args = {
    arrowPosition: 'topLeft',
    placement: 'bottomLeft',
}
