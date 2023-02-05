import React from 'react';
import s from './Contact.module.css'
import sContainer from "../common/styles/Container.module.css";
import sButton from "../common/styles/Button.module.css";

export function Contact() {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <h2 className={s.title}>Контакты</h2>

                <form className={s.form}>
                        <label htmlFor="fname">Имя:</label>
                        <input type="text" id="fname" name="fname"/>
                        <label htmlFor="lname">Фамилия:</label>
                        <input type="text" id="lname" name="lname"/>
                        <label htmlFor="lname">Ваше сообщение:</label>
                    <textarea className={s.textarea}></textarea>
                </form>

                <button className={sButton.button}>Отправить</button>
            </div>
        </div>
    );
};

