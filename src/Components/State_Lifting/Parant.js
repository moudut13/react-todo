import React from 'react';
import Child from './Child';

function Parent() {
    const data = "I am Moudut";
    const handleChild = (child) =>{
        console.log("App "+ child);
    }
    return (
        <div>
            <Child data={data} onChildData={handleChild} />
        </div>
    );
}

export default Parent;