import React from "react";
import style from "./Main.module.css"
import Container from "../common/styles/Container.module.css"

export function Main() {
    return (
        <section className={style.mainBlock}>
            <div className={Container.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>My name</h1>
                    <p>Greeting & my skill</p>
                </div>
                <div className={style.photo}>
                    <img className={style.img} src={"https://www.w3schools.com/w3images/avatar2.png"} alt={""}/>
                </div>
            </div>
        </section>
    )
}