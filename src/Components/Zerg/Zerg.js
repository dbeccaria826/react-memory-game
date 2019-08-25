import React from 'react';

import '../../App.css'

const card  = (props) => {
    return (
        <div className="card" style={{width: '150px', height: '165px', display:'inline-flex'}} value={props.id} onClick={props.click}>
        
          <img src={props.image} alt={props.id} key={props.id} style={{width: '150px'}}/>
       
        </div>
    )
}

export default card;