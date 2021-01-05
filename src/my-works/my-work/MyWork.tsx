import React from "react"
import style from "./MyWork.module.css"

export function MyWork(props: any) {
    return (
        <div className={style.container}>
            <img alt={""} className={style.img} src={"https://www.sketchappsources.com/resources/source-image/nyan-cat-artoctober.png"}/>
            <span className={style.link} >{props.title}</span>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}