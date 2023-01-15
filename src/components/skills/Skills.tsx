import React, {useState} from "react";
import style from "./Skills.module.scss"
import Container from "../../styles/Container.module.scss"
import Carousel from 'react-spring-3d-carousel';
import {Skill} from "./skill/Skill";
import {Fade} from "react-awesome-reveal";
import { skills } from "./skillsData";

export function Skills() {

    const [slide, goToSlide] = useState(0)

    const slides = skills.map((el, index) => ({
        key: index,
        content: <Skill style={el.style} title={el.title} description={el.description}/>,
        onClick: () => goToSlide(index),
    }))

    return (
        <section className={style.skillsBlock} id="skills">
            <Fade>
                <div className={`${Container.container} ${style.skillsContainer}`}>
                    <h2 className={style.title}>Skills</h2>
                    <div className={style.skills}>
                        <Carousel slides={slides} showNavigation={true} goToSlideDelay={200} goToSlide={slide} />
                    </div>
                </div>
            </Fade>
        </section>
    )
}