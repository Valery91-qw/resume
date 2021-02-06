import React from "react"
import style from "./Footer.module.scss"
import Container from "../common/styles/Container.module.scss"
import GitImage from "../assets/icons/github-logo.png"
import LinkedinImage from  "../assets/icons/linkedin.png"

export function Footer() {
    return (
        <footer className={style.footerBox}>
            <div className={`${Container.container} ${style.FooterContainer}`}>
                <div className={style.linkContainer}>
                    <h5 className={style.title}>Share :</h5>
                    <a href="#" className={style.link}><img alt={"Github"} className={style.linkImg} src={GitImage} /></a>
                    <a href="#" className={style.link}><img alt={"Linkedin"} className={style.linkImg} src={LinkedinImage}/></a>
                </div>
                <p className={style.credits}>created 2021</p>
            </div>
        </footer>
    )
}