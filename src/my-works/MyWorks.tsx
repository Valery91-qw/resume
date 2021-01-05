import React from "react"
import style from "./MyWorks.module.css"
import Container from "../common/styles/Container.module.css"
import {MyWork} from "./my-work/MyWork";


export function MyWorks() {
    return (
        <section className={style.myWorksBlock}>
            <div className={`${Container.container} ${style.myWoksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.container}>
                    <MyWork title={"My some work"}
                            description={"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Dicta,in ipsum nulla praesentium quis quod saepe similique vitae! Aliquam autem corporis dicta ducimus earum, explicabo nemo"}/>
                    <MyWork title={"My some work"}
                            description={"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Dicta,in ipsum nulla praesentium quis quod saepe similique vitae! Aliquam autem corporis dicta ducimus earum, explicabo nemo"}/>
                    <MyWork title={"My some work"}
                            description={"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Dicta,in ipsum nulla praesentium quis quod saepe similique vitae! Aliquam autem corporis dicta ducimus earum, explicabo nemo"}/>
                </div>
            </div>
        </section>
    )
}