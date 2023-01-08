import React from "react";
import style from "./Skills.module.scss"
import Container from "../../styles/Container.module.scss"
import {Skill} from "./skill/Skill";
import typeScriptImg from "../../assets/icons/typescript.png"
import javaScriptImg from "../../assets/icons/javascript.png"
import reactImage from "../../assets/icons/react.png"
import reduxImage from "../../assets/icons/redux.png"
import { Fade } from "react-awesome-reveal";


export function Skills() {
    const tsImg = {backgroundImage: `url(${typeScriptImg})`}
    const jsImg = {backgroundImage: `url(${javaScriptImg})`}
    const reactImg = {backgroundImage: `url(${reactImage})`}
    const reduxImg = {backgroundImage: `url(${reduxImage})`}
    return (
        <section className={style.skillsBlock} id="skills">
            <Fade>
                <div className={`${Container.container} ${style.skillsContainer}`} >
                    <h2 className={style.title}>Skills</h2>
                    <div className={style.skills}>
                        <Skill style={jsImg} title={"JavaScript"}
                               description={"Is a lightweight, interpreted, " +
                               "object-oriented language with first-class functions, and is best known as the scripting " +
                               "language for Web pages"}/>
                        <Skill style={tsImg} title={"TypeScript"}
                               description={" Is a programming language developed and maintained by Microsoft. " +
                               "It is a strict syntactical superset of JavaScript and adds optional static typing to the language."}/>
                        <Skill style={reactImg} title={"REACT"}
                               description={"Is an open-source, front end, JavaScript library for building user interfaces or UI components"}/>
                        <Skill style={reduxImg} title={"REDUX"}
                               description={"Is a pattern and library for managing and updating application state, using events called \"actions\"."}/>
                    </div>
                </div>
            </Fade>
        </section>
    )
}