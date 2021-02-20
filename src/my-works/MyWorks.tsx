import React from "react"
import style from "./MyWorks.module.scss"
import Container from "../common/styles/Container.module.scss"
import {MyWork} from "./my-work/MyWork";
import someWork from "../assets/icons/images.png"
import { Fade } from "react-awesome-reveal";

export function MyWorks() {
    const someImage = {
        backgroundImage: `url(${someWork})`
    }

    return (
        <section className={style.myWorksBlock} id="project">
            <Fade>
                <div className={`${Container.container} ${style.myWoksContainer}`} >
                    <h2 className={style.title}>My works</h2>
                    <div className={style.container}>
                        <MyWork style={someImage} title={"My some work"}
                                description={"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Dicta,in ipsum nulla praesentium quis quod saepe similique vitae! Aliquam autem corporis dicta ducimus earum, explicabo nemo"}/>
                        <MyWork style={someImage} title={"My some work"}
                                description={"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Dicta,in ipsum nulla praesentium quis quod saepe similique vitae! Aliquam autem corporis dicta ducimus earum, explicabo nemo"}/>
                        <MyWork style={someImage} title={"My some work"}
                                description={"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Dicta,in ipsum nulla praesentium quis quod saepe similique vitae! Aliquam autem corporis dicta ducimus earum, explicabo nemo"}/>
                    </div>
                </div>
            </Fade>
        </section>
    )
}