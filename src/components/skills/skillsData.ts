import CSS from 'csstype';

import typeScriptImg from "../../assets/icons/typescript.png"
import javaScriptImg from "../../assets/icons/javascript.png"
import reactImage from "../../assets/icons/react.png"
import reduxImage from "../../assets/icons/redux.png"

const tsImg = {backgroundImage: `url(${typeScriptImg})`}
const jsImg = {backgroundImage: `url(${javaScriptImg})`}
const reactImg = {backgroundImage: `url(${reactImage})`}
const reduxImg = {backgroundImage: `url(${reduxImage})`}

const skillsData: Array<{bg: CSS.Properties, title: string, description: string}> = [
    {
        bg: tsImg,
        title: "JavaScript",
        description: "Is a lightweight, interpreted, " +
            "object-oriented language with first-class functions, and is best known as the scripting " +
            "language for Web pages"
    },
    {
        bg: jsImg,
        title: "TypeScript",
        description: " Is a programming language developed and maintained by Microsoft. " +
            "It is a strict syntactical superset of JavaScript and adds optional static typing to the language."
    },
    {
        bg: reactImg,
        title: "REACT",
        description: "Is an open-source, front end, JavaScript library for building user interfaces or UI components"
    },
    {
        bg: reduxImg,
        title: "REDUX",
        description: "Is a pattern and library for managing and updating application state, using events called \"actions\"."
    },
]

export default skillsData;