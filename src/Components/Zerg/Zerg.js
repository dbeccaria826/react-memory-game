import React from 'react';

import '../../App.css'

const card  = (props) => {
    return (
        <div className="card" style={{width: '150px', height: '165px', display:'inline-flex'}}>
        
          <img src={props.image} alt="..." style={{width: '150px'}}/>
       
        </div>
    )
}

export default card;