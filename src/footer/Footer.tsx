import React from "react"
import style from "./Footer.module.css"
import Container from "../common/styles/Container.module.css"

export function Footer() {
    return (
        <footer className={style.footerBox}>
            <div className={`${Container.container} ${style.FooterContainer}`}>
                <h3 className={style.title}>My full name</h3>
                <div className={style.linkContainer}>
                <span className={style.link}>twitter</span>
                <span className={style.link}>facebook</span>
                <span className={style.link}>LinkedIn</span>
                <span className={style.link}>github</span>
                </div>
                <span className={style.credits}>created 2021</span>
            </div>
        </footer>
    )
}