import React from "react";
import style from "./Main.module.scss"
import Container from "../common/styles/Container.module.scss"
import image from "../assets/icons/IMG_3679==.jpg"
import { Fade } from "react-awesome-reveal";

export function Main() {
    const img = {
        backgroundImage: `url(${image})`
    }


    return (
        <section className={style.mainBlock} id="main">
            <Fade>
                <div className={Container.container} >
                    <div className={style.text}>
                        <h4>Hi there</h4>
                        <h2>My name is Valery</h2>
                        <h4>I'm front-end developer</h4>
                    </div>
                    <div style={img} className={style.photo}/>
                </div>
            </Fade>
        </section>

    )
}