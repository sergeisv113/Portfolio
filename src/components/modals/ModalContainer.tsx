import React, {useState} from "react";
import {Modal} from "./Modal";
import styles from "../projects/project/Project.module.scss";

export const ModalContainer: React.FC<any> = (
    {
        title,
        stack,
        description,
        imageModal,
        linkGH,
        linkPr,
        children
    }
) => {
    const [showModal, setShowModal] = useState(false)

    return <>
        <div className={styles.tittleBefore} onClick={() => setShowModal(true)}><h4>{title}</h4></div>
        {showModal &&
        <Modal
            showModal={setShowModal}
            title={title}
            stack={stack}
            description={description}
            imageModal={imageModal}
            linkGH={linkGH}
            linkPr={linkPr}
        >
            {children}
        </Modal>}
    </>
}

