import React from "react"
import style from "./MyWork.module.scss"

export function MyWork(props: any) {
    return (
        <div className={style.container}>
            <div style={props.style} className={style.img}/>
            <a className={style.link}  href={"#"}>{props.title}</a>
            <h4 className={style.title}>{props.title}</h4>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}