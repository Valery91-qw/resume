import React from "react";
import style from "./Nav.module.scss"
import { Link} from 'react-scroll';

export function Nav() {
    return (
        <nav className={style.nav}>
            <Link smooth={true} offset={-100} to={"main"} className={style.link}>Main</Link>
            <Link smooth={true} to={"skills"} className={style.link}>Skills</Link>
            <Link smooth={true} to={"project"} className={style.link}>Project</Link>
            <Link smooth={true} to={"contact"} className={style.link}>Contact</Link>
        </nav>
    )
}
