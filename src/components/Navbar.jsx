import NavbarIcon from "/react-icon-small.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "navbar navbar-dark" : "navbar"}>
            <img className="navbar--icon" src={NavbarIcon}/>
            <h2 className="navbar--icon_text">ReactFacts</h2>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleTheme}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}