import React from "react";
import style from "./Nav.module.css"

export function Nav() {
    return (
        <nav className={style.nav}>
            <span className={style.link}>Главная</span>
            <span className={style.link}>Скилы</span>
            <span className={style.link}>Проекты</span>
            <span className={style.link}>Контакты</span>
        </nav>
    )
}