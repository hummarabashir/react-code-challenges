import { useEffect } from "react"

export default function WindowEvent (){
    useEffect(() => {
        const doubleClick = () => alert('Mouse is clicked')
        window.addEventListener('dblclick', doubleClick)
        return () => window.removeEventListener('dblclick', doubleClick)
    }, [])
    return (
        <h2>Window is active !!</h2>
    )
}