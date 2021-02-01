import React from "react";
import style from "./Main.module.css"
import Container from "../common/styles/Container.module.css"

export function Main() {
    return (
        <section className={style.mainBlock}>
            <div className={Container.container}>
                <div className={style.text}>
                    <h4>Hi there</h4>
                    <h2>My name Valery</h2>
                    <h4>Web developer</h4>
                </div>
                <div className={style.photo}>
                    <img className={style.img} src={"https://www.w3schools.com/w3images/avatar2.png"} alt={""}/>
                </div>
            </div>
        </section>

    )
}