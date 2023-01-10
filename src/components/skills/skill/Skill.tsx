import React from "react";
import style from "./Skill.module.scss"
import {SkillType} from "../skillsData";

export function Skill (props: SkillType) {
    return(
        <div className={style.skill}>
            <div style={props.style} className={style.icon}/>
            <div>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}