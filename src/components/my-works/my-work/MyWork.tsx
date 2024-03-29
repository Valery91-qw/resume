import React from "react"
import style from "./MyWork.module.scss"

export function MyWork(props: any) {
    return (
        <div className={style.container}>
            <div style={props.style} className={style.img}/>
            <a target="_blank" rel="noreferrer" className={style.link}  href={props.a}>{props.title}</a>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    )
}