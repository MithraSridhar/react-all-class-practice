import { createContext, useContext } from 'react'
import { Sample2 } from "./Sample2"
import Ref from './Ref'
import { Reducer } from './Reducer'
//1. Creating - createContext ✅
//2. Publisher - provider  - context.Provider  ✅
//3. Subscriber  -useContext - useContext(context) ✅

const NameContext = createContext()

export function ContextExample() {
    const name = "jack"
    return (
        <NameContext.Provider value={name}>
            <div>
                <Reducer />
                {/* <Ref /> */}

                {/* <Sample />
                <Sample1 />
                <Sample2 /> */}
            </div>
        </NameContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(NameContext)
}


function Sample() {
    const name = useGlobalContext()
    return (
        <h1>Hi {name}</h1>
    )
}

function Sample1() {
    const user = useContext(NameContext)
    return (
        <h1>Welcome {user}</h1>
    )
}



