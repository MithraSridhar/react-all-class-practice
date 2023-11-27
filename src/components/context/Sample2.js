import { useGlobalContext } from "./ContextExample"
export function Sample2() {
    const usr = useGlobalContext()
    return (
        <h1>Hey {usr}</h1>
    )
}