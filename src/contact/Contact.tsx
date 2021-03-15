import React, {useState} from "react"
import style from "./Contact.module.scss"
import Container from "../common/styles/Container.module.scss"
import {Fade} from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import axios from "axios";

type Inputs = {
    name: string
    email: string
    message: string
}

export function Contact() {

    const { register,reset, handleSubmit , clearErrors ,errors,  } = useForm<Inputs>()
    const [disable, setDisable] = useState(false)

    const onSubmit = (data: Inputs) => {
        setDisable(true)
        axios.post(`https://sntp-nodejs-server.herokuapp.com/sendMessage`, data)
            .then((res) => {
                setDisable(false)
                reset()
            })
            .catch(() => setDisable(false))
    }
    return (
        <section onClick={() => {clearErrors()}} className={style.contactBox} id="contact">
            <Fade>
                <div className={Container.container}>
                    <div className={style.contactContainer}>
                        <h3 className={style.title}>Contact</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                            <input className={style.nameForm} placeholder={"Name"} name='name' ref={register}/>
                            <input className={errors.email ? style.emailFormError :  style.emailForm }
                                   placeholder={"email"} name='email' ref={register({required: true, pattern: /@/ })}/>
                            <textarea className={style.textarea} placeholder={"Your message"} name='message' ref={register}/>
                            <button disabled={disable} className={disable ? style.buttonDisable : style.button}>send</button>
                        </form>
                    </div>
                </div>
            </Fade>
        </section>
    )
}