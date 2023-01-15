import React from "react"
import style from "./Footer.module.scss"
import Container from "../../styles/Container.module.scss"
import GitImage from "../../assets/icons/github-logo.png"
import LinkedinImage from "../../assets/icons/linkedin.png"
import CodeWars from "../../assets/icons/iconfinder_codewars_4691329.png"

export function Footer() {
    return (
        <footer className={style.footerBox}>
            <div className={`${Container.container} ${style.FooterContainer}`}>
                <div className={style.linkContainer}>
                    <h5 className={style.title}>Share :</h5>
                    <a href="https://github.com/Valery91-qw" className={style.link}><img alt={"Github"} className={style.linkImg} src={GitImage} /></a>
                    <a href="https://www.linkedin.com/in/valery-kryveka/" className={style.link}><img alt={"Linkedin"} className={style.linkImg} src={LinkedinImage}/></a>
                    <a href="https://www.codewars.com/users/Vaal91" className={style.link}><img alt={"CodeWars"} className={style.linkImg} src={CodeWars}/></a>
                </div>
                <p className={style.credits}>created 2021</p>
            </div>
        </footer>
    )
}