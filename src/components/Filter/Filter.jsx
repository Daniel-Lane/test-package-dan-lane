import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from '../Input'
import { Label } from '../Label'
import { StyledFilter } from './Filter.styles'

export const Filter = ({
    accessibilityId,
    dataToFilter,
    filterByKey,
    label,
    placeholder,
    onFilter,
}) => {
    const [filterInputValue, setFilterInputValue] = useState('')

    const handleFilterOnChange = value => {
        setFilterInputValue(value)

        const returnedData = dataToFilter.filter(item => {
            const isMatch = filterByKey.some(key =>
                item[key].toString().toLowerCase().includes(value.toLowerCase())
            )
            if (isMatch) return item

            return null
        })
        onFilter(returnedData)
    }

    return (
        <StyledFilter>
            <Label htmlFor={accessibilityId} text={label} />
            <Input
                accessibilityId={accessibilityId}
                autoComplete="off"
                id={accessibilityId}
                label={label}
                onChange={handleFilterOnChange}
                placeholder={placeholder}
                value={filterInputValue}
            />
        </StyledFilter>
    )
}

Filter.propTypes = {
    accessibilityId: PropTypes.string.isRequired,
    dataToFilter: PropTypes.array.isRequired,
    filterByKey: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}
