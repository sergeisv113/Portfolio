import React, {CSSProperties} from "react";
import styles from "./Modal.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';



type PropsType = {
    showModal: (value: boolean) => void
    title: string
    stack: string
    description: string
    imageModal: CSSProperties
    linkGH: string
    linkPr: string
    children: any
}

export const Modal: React.FC<PropsType> = (
    {
        showModal,
        title,
        stack,
        description,
        imageModal,
        linkGH,
        linkPr,
        children
    }
) => {

    return <>
        <div className={styles.background} onClick={() => showModal(false)}></div>
        <div className={styles.modal}>
            <div className={styles.header}><h3>{title}</h3></div>
            <div className={styles.image} style={imageModal}></div>
            <div className={styles.info}>
                <h5>PROJECT INFO</h5>
                <p>{description}</p>
                <h5>STACK TECHNOLOGIES</h5>
                <p>{stack}</p>
                <div className={styles.link}>
                    <div className={styles.icFirst}>
                        <a href={linkGH} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className={styles.centre}/>
                            <FontAwesomeIcon icon={faSpinner} className={styles.circle}/>
                        </a>
                    </div>
                    <div className={styles.icSecond}>
                        <a href={linkPr} target="_blank">
                            <FontAwesomeIcon icon={faLink} className={styles.centre}/>
                            <FontAwesomeIcon icon={faSpinner} className={styles.circle}/>
                        </a>
                    </div>
                </div>
            </div>
            <FontAwesomeIcon icon={faTimesCircle} className={styles.icon} onClick={() => showModal(false)}/>
            {children}
        </div>
    </>
}

