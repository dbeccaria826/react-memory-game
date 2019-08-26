import React from 'react';
import styled from 'styled-components'


const Card = styled.div`
  width: 150px;
  height: 165px;
  display: inline-flex;
  margin: 5px;
  background: black;
`

const card  = (props) => {
    return (
      <Card className="card" value={props.id} onClick={props.click}>
        <div className="card-image">
          <img src={props.image} alt={props.id}/>
        </div>
      </Card>
        
     
        
    )
}

export default card;