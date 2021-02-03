import React from "react";
import style from "./Main.module.scss"
import Container from "../common/styles/Container.module.scss"
import image from  "../assets/icons/man-312686_1280.png"

export function Main() {
    const img = {
        backgroundImage: `url(${image})`
    }

    return (
        <section className={style.mainBlock}>
            <div className={Container.container}>
                <div className={style.text}>
                    <h4>Hi there</h4>
                    <h2>My name Valery</h2>
                    <h4>I'm Web developer</h4>
                </div>
                <div style={img} className={style.photo} />
            </div>
        </section>

    )
}