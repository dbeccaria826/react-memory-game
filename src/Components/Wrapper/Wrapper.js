import React from 'react';
import styled from 'styled-components'

const Aux = styled.div`
    background: black;
    
`

const wrapper = (props) => {
    return (
        <Aux>
             <div>{props.children}</div>
        </Aux>
           
       
        
    )
}

export default wrapper;