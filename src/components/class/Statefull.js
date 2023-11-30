import React, { useState } from 'react';

function Statefull(){
    
    const[count,setCount] = useState(0)

    const incrementCount =()=>{
        setCount(count+1)
    }
    return (
        <div>
            <p>Coount: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
};

export default Statefull;