import React from 'react';
import s from './Footer.module.scss'
import sContainer from "../../common/styles/Container.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import Icon from "@iconify/react";
import codewarsIcon from '@iconify-icons/cib/codewars';
const Bounce = require("react-reveal/Bounce")

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <Bounce top>
                <h3 className={s.title}>Sergei Strelets</h3>

                <div className={s.iconsBlock}>
                    <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook}
                                                                                                  className={s.icon}/></a>
                    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram}
                                                                                                   className={s.icon}/></a>
                    <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon
                        icon={faLinkedin} className={s.icon}/></a>
                    <a href="src/components/footer/Footer" target="_blank"><FontAwesomeIcon icon={faGithub}
                                                                                            className={s.icon}/></a>
                    <a href="https://www.codewars.com/" target="_blank">
                        <Icon icon={codewarsIcon} className={s.icon}/>
                    </a>
                </div>
                <span className={s.titleSpan}>© 2021 All rights reserved</span>
                </Bounce>
            </div>
        </div>
    );
};

