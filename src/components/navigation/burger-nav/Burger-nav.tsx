import style from "./Burger-nav.module.scss"
import {Link} from "react-scroll";
import React, {useState} from "react";


export function BurgerNav() {

    const [toggle, setToggle ] = useState(false)

    const handleOpen = () => {
        setToggle((prev) => !prev)
    }

    return (
        <nav className={style.navBurger}>
            <div className={toggle ? `${style.navBurgerItems} ${style.show}` : style.navBurgerItems}>
            <Link smooth={true} offset={-100} to={"main"} className={style.link}>Main</Link>
            <Link smooth={true} to={"skills"} className={style.link}>Skills</Link>
            <Link smooth={true} to={"project"} className={style.link}>Project</Link>
            <Link smooth={true} to={"contact"} className={style.link}>Contact</Link>
            </div>
            <div className={toggle ? `${style.navBurgerBtn} ${style.active}` : style.navBurgerBtn} onClick={handleOpen}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}