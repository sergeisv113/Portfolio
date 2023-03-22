import React from 'react';
import s from './Remote.module.scss'
import sContainer from "../../common/styles/Container.module.scss";
import {Button} from "../button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
const Bounce = require("react-reveal/Bounce")

export const Remote = () => {
    return (
        <div className={s.distantBlock}>
            <div className={`${sContainer.container} ${s.distantContainer}`}>
                <Bounce top>
                <h2 className={s.title}>Considering remote <span>work options</span> </h2>
                <div className={s.cv}>
                    <Button>
                        <a href="https://docs.google.com/document/d/11XAl_vdU01Fg5WfVm643jKuA5VljbTS99rCXTIK8uNQ/edit?usp=sharing"
                           target="_blank">
                            <FontAwesomeIcon icon={faDownload}/> Download My CV</a>
                    </Button>
                </div>
                </Bounce>
            </div>
        </div>
    );
};

