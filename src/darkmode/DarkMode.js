import { useState } from "react"

export default function DarkMode(){
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className ={`page ${darkMode && 'dark-mode'}`}>
            <button className="darkmodebutton" onClick={() => setDarkMode(true)}>DARK MODE</button>
            <button className="lightmodebutton" onClick={() => setDarkMode(false)}>LIGHT MODE</button>
        </div>
    )
}