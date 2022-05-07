import React, { useState } from 'react';

function OnChangeFunction() {
    const [changeValue , setChangeValue] = useState('');
    const [count,setCount] = useState(0);
    const handelChange =(e) =>{
        setChangeValue(e.target.value)
    }

    const handleClick = (e) =>{
        setCount(count + 1)
    }


    return (
        <div>
            <h5>Function Component OnChange Event</h5>
            <input type="text" onChange={handelChange} />
            <p>{changeValue}</p>
            <br/>
            <br/>
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>Click</button>
            <br/>
            <br/>
        </div>
     );
}

export default OnChangeFunction;