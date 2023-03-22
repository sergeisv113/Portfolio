import React, {CSSProperties} from 'react';
import s from './Project.module.scss'
import {ModalContainer} from "../../modals/ModalContainer";

type PropsType = {
    style: CSSProperties
    title: string
    description: string
    stack: string
    imageModal: CSSProperties
    linkGH: string
    linkPr: string
}
export const Project = (props: PropsType) => {
    return (
        <div  className={s.project}>
            <div className={s.image} style={props.style}>
                <ModalContainer
                    title={props.title}
                    stack={props.stack}
                    description={props.description}
                    imageModal={props.imageModal}
                    linkGH={props.linkGH}
                    linkPr={props.linkPr}
                />
            </div>
        </div>
    );
};

