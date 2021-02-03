import React from "react";
import style from "./Skills.module.scss"
import Container from "../common/styles/Container.module.scss"
import {Skill} from "./skill/Skill";
import typeScriptImg from "../assets/icons/typescript.png"
import javaScriptImg from "../assets/icons/javascript.png"
import reactImage from  "../assets/icons/react.png"
import reduxImage from "../assets/icons/redux.png"


export function Skills () {
    const tsImg = {backgroundImage: `url(${typeScriptImg})`}
    const jsImg = {backgroundImage: `url(${javaScriptImg})`}
    const reactImg = {backgroundImage: `url(${reactImage})`}
    const reduxImg = {backgroundImage: `url(${reduxImage})`}
    return (
        <section className={style.skillsBlock}>
            <div className={`${Container.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill style={jsImg} title={"JavaScript"}
                           description={"Lorem ipsum dolor sit amet. Explicabo, sed."}/>
                    <Skill style={tsImg} title={"TypeScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sed."}/>
                    <Skill style={reactImg} title={"REACT"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sed."}/>
                    <Skill style={reduxImg} title={"REDUX"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sed."}/>
                </div>
            </div>
        </section>
    )
}