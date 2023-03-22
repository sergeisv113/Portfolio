import React, {ChangeEvent, useState} from 'react';
import s from './Contacts.module.scss'
import {Button} from '../button/Button';
import axios from "axios";
import {ContactBlock} from "./contactBlock/ContactBlock";
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
const Bounce = require("react-reveal/Bounce")




export const Contacts = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeSubject = (e: ChangeEvent<HTMLInputElement>) => {
        setSubject(e.currentTarget.value)
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }


    function submit() {
        axios.post('http://localhost:3000/sendMessage', {
            name, email, subject, message
        })
            .then(() => {
                alert('Ваше сообщение отправлено!')
            })
            .catch((res) => {
                alert(res)
            })
    }

    return (
       /* <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>*/
        <div className={s.wrapper} id={'contacts'}>
                <h2 className={s.title}>Contact</h2>

                <div className={` ${s.container}`}>
                    <Bounce top>
                        <ContactBlock icon={faPhone}
                                      title={'PHONE NUMBER:'}
                                      description={'+380 (50) 704-2-911'}/>
                        <ContactBlock icon={faEnvelope}
                                      title={'EMAIL ADDRESS:'}
                                      description={'sergeisv113@gmail.com'}/>
                        <ContactBlock icon={faMapMarkerAlt}
                                      title={'MY LOCATION:'}
                                      description={'Kharkov, Domostroitelnaya Street 7'}/>

                        <div className={s.formBlock}>

                            <div className={s.box1}>
                                <input type='text' name='name' placeholder='Name' required={true} onChange={onChangeName}/>
                                <input type='email' name='email' placeholder='Email*' required={true}
                                       onChange={onChangeEmail}/>
                            </div>

                            <input type='text' name='subject' placeholder='Subject*' required={true}
                                   onChange={onChangeSubject}/>
                            <textarea name='message' placeholder='Message*' required={true}
                                      onChange={onChangeMessage}></textarea>
                            <Button className={s.btn} onClick={submit}>Submit</Button>
                        </div>
                        <div className={s.map}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d160.04784118384958!2d36.20841942569428!3d50.07195393812603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sheliga.com.ua!5e0!3m2!1sru!2sua!4v1677429505344!5m2!1sru!2sua"
                                allowFullScreen aria-hidden="false" tabIndex={0}
                            ></iframe>
                        </div>
                    </Bounce>
                </div>
        </div>
   )
}


