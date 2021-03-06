import React from "react";
import style from "./Main.module.scss"
import Container from "../common/styles/Container.module.scss"
import image from "../assets/icons/IMG_3679==.jpg"
import Particles from 'react-particles-js';
import { Fade } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';

export function Main() {
    const img = {
        backgroundImage: `url(${image})`
    }


    return (
        <section className={style.mainBlock} id="main">
            <Particles className={style.particles} params={{
                "particles": {
                "number": {
                "value": 60,
                "density": {
                "enable": true,
                "value_area": 1500
            }
            },
                "line_linked": {
                "enable": true,
                "opacity": 0.02
            },
                "move": {
                "direction": "right",
                "speed": 0.05
            },
                "size": {
                "value": 1
            },
                "opacity": {
                "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
            }
            },
                "interactivity": {
                "events": {
                "onclick": {
                "enable": true,
                "mode": "push"
            }
            },
                "modes": {
                "push": {
                "particles_nb": 1
            }
            }
            },
                "retina_detect": true
            }} />
            <Fade>
                <div className={Container.container} >
                    <div className={style.text}>
                        <h4>Hi there</h4>
                        <h2>My name is Valery</h2>
                        <h4>I'm front-end developer</h4>
                    </div>
                    <div style={img} className={style.photo}/>
                </div>
            </Fade>
        </section>

    )
}