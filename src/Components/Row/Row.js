import React from 'react';
import styled from 'styled-components'

const Row = styled.div`
    color:#008000;
`

const row = (props) => {
    return (
        <Row>
            <div className="row" {...props} />
        </Row>
        

        
    )
}

export default row;