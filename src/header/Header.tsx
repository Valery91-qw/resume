import {Nav} from "../navigation/Nav";
import React from "react";
import style from "./Header.module.scss"

export function Header() {
    return (<header className={style.header}>
        <Nav />
            </header>
    )
}