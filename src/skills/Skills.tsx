import React from "react";
import style from "./Skills.module.css"
import Container from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export function Skills () {
    return (
        <section className={style.skillsBlock}>
            <div className={`${Container.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Скилы</h2>
                <div className={style.skills}>
                    <Skill title={"JS"}
                           description={"Lorem ipsum dolor sit amet. Explicabo, sed."}/>
                    <Skill title={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sed."}/>
                    <Skill title={"REACT"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sed."}/>
                </div>
            </div>
        </section>
    )
}