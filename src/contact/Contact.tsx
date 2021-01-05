import React from "react"
import style from "./Contact.module.css"
import Container from "../common/styles/Container.module.css"


export function Contact() {
    return (
        <section className={style.contactBox}>
            <div className={Container.container}>
                <div className={style.contactContainer}>
                <h3 className={style.title}>Contact with me</h3>
                <form className={style.form}>
                    <input className={style.nameForm} placeholder={"Name"}/>
                    <input className={style.emailForm} placeholder={"email"}/>
                    <textarea className={style.textarea} placeholder={"Your message"}/>
                    <button className={style.button}>Отправить</button>
                </form>
                </div>
            </div>
        </section>
    )
}