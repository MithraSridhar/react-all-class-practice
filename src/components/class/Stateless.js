import { useState } from "react"

// stateless => function comp

export const StateLess = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    )
}