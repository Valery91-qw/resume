import React from "react";
import style from "./Nav.module.css"

export function Nav() {
    return (
        <nav className={style.nav}>
            <a href={"#"} className={style.link}>Home</a>
            <a href={"#"} className={style.link}>Skills</a>
            <a href={"#"} className={style.link}>Project</a>
            <a href={"#"} className={style.link}>Contact</a>
        </nav>
    )
}