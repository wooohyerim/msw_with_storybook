import { FC, useState } from "react"

type CounterProps = {
    value : number
    text: string
}

const Counter:FC<CounterProps> = ({value,text}) => {
    const [count,setCount] = useState(value)
  return <div>
    {count}
    {text}
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
  </div>
}

export default Counter