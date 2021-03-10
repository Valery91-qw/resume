import {Nav} from "../navigation/Nav";
import React from "react";
import style from "./Header.module.scss"
import {BurgerNav} from "../navigation/burger-nav/Burger-nav";

export function Header() {
    return (<header className={style.header}>
            <Nav/>
            <BurgerNav/>
        </header>
    )
}