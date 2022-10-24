import { useState } from "react";

type Props = {
    initialCount: number;
};

export default function Counter({initialCount}: Props){
    const [count, setCount] = useState(initialCount);
    return(
        <div>
            <h4>Test</h4>
            Count: {count}
            <br />
            <button onClick={()=>setCount(initialCount)} >Reset</button>
            <br />
            <button onClick={()=>setCount(prevCount => prevCount + 1)}> + </button>
            <br />
            <button onClick={()=>setCount(prevCount => prevCount -1 )}> - </button>
        </div>
    );
}