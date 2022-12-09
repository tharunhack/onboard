import { useState } from "react"
import { Component } from "react";
import "./Sample.css";

const Sample = ()=>{
const [count, setCount] = useState(0);
return(
    <div>
        <h1>hello</h1>
        <button className="hello" onClick={()=> setCount(count + 1)}>+</button>
        <button>{count}</button>
        <button className="New" onClick={()=> setCount(count - 1)}>-</button>

    </div>
    
)
}

export default Sample