import React from "react";
import style from "./Skill.module.css"

export function Skill (props: any) {
    return(
        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <div>
            <h4 className={style.title}>{props.title}</h4>
            <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}