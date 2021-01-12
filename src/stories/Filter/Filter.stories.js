import React, { useState } from 'react'

import { Grid, GridItem, Filter, PageWrapper } from '../../components'
import testdata from '../../assets/data/testData.json'

export default {
    title: 'Molecules/Filter',
    component: Filter,
}

const testDivStyle = {
    border: '1px solid lightgrey',
    borderRadius: '5px',
    marginTop: '60px',
    padding: '50px 40px 30px',
    position: 'relative',
}

const testSpanStyle = {
    background: '#015057',
    color: 'white',
    left: 0,
    padding: '5px 10px',
    position: 'absolute',
    top: 0,
}

const testListStyle = {
    color: '#484848',
    marginBottom: '10px',
}

const testListSpanStyle = {
    color: '#3a3a3a',
    fontWeight: 'bold',
    margin: '0 10px',
}

const PrimaryTemplate = args => {
    const initialData = testdata
    const [filteredData, setFilteredData] = useState(initialData)

    return (
        <PageWrapper>
            <Grid>
                <GridItem sm="12" md="4" lg="4">
                    <Filter
                        {...args}
                        accessibilityId="Filter"
                        dataToFilter={initialData}
                        filterByKey={['name', 'id', 'email']}
                        label="Filter"
                        onFilter={setFilteredData}
                    />
                </GridItem>
            </Grid>

            <div style={testDivStyle}>
                <span style={testSpanStyle}>Test Data</span>
                <ul>
                    {filteredData &&
                        filteredData.map(item => (
                            <li key={item.id} style={testListStyle}>
                                {' '}
                                <span style={testListSpanStyle}>ID:</span>{' '}
                                {item.id},
                                <span style={testListSpanStyle}>NAME:</span>
                                {item.name},
                                <span style={testListSpanStyle}>EMAIL:</span>
                                {item.email}
                            </li>
                        ))}
                </ul>
            </div>
        </PageWrapper>
    )
}

export const Default = PrimaryTemplate.bind({})
Default.args = {
    filterByKey: ['email', 'id', 'name'],
    id: 'ASN Details Filter',
    label: 'Filter',
    placeholder: 'Filter by ID, Name & Email',
}
