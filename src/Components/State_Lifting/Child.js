import React, { useState } from 'react';
function Child(props) {
    const data = "Shuvo Ahmad";
    props.onChildData(data)
     
    return (
        <div>
            I am Child
            <p>{props.data}</p>
        </div>
    );
    
}

export default Child;