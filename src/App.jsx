import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { useState } from "react"

export default function App() {
    const [darkMode, setDarkMode] = useState(false)

    function toggleTheme() {
        setDarkMode(prevDarkModeValue => !prevDarkModeValue)
    }

    return (
        <div className="container">
            <Navbar
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />
            <Main
                darkMode={darkMode}
            />
        </div>
    )
}