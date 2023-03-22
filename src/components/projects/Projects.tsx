import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./project/Project";
import sContainer from "../../common/styles/Container.module.scss";
import counter from '../../assets/image/cover/COUNTER.jpg'
import heliga from '../../assets/image/cover/HELIGA.jpg'
import social from '../../assets/image/cover/SOCIAL.jpg'
import todo from '../../assets/image/cover/TODO.jpg'

import counterPw  from '../../assets/image/preview/counter_Pw.png'
import heligaPw from '../../assets/image/preview/heliga_Pw.png'
import socialPw from '../../assets/image/preview/social_Pw.png'
import todoPw from '../../assets/image/preview/todo_Pw.png'
const Bounce = require("react-reveal/Bounce")


export const Projects = () => {
    const projects = [
        {   id: '1',
            image: {backgroundImage: `url(${counter})`},
            imageModal: {backgroundImage: `url(${counterPw})`},
            title: 'Counters',
            stack: 'CSS, HTML, TS, Redux',
            description: 'Counter useState and Redux',
            linkGH: 'https://github.com/sergeisv113/counter',
            linkPr: 'https://sergeisv113.github.io/counter'
        },
        {   id: '2',
            image: {backgroundImage: `url(${heliga})`},
            imageModal: {backgroundImage: `url(${heligaPw})`},
            title: 'Site wordpress',
            stack: 'CSS, HTML, Wordpress, SEO',
            description: 'Training project for practicing responsive layout',
            linkGH: 'https://heliga.com.ua/',
            linkPr: 'https://heliga.com.ua/'
        },
        {   id: '3',
            image: {backgroundImage: `url(${social})`},
            imageModal: {backgroundImage: `url(${socialPw})`},
            title: 'Social network',
            stack: 'CSS, HTML, TS, React, Redux, Adaptive layout',
            description: 'Social network',
            linkGH: 'https://github.com/sergeisv113/samurai-wai',
            linkPr: 'https://sergeisv113.github.io/samurai-way/'
        },
        {   id: '4',
            image: {backgroundImage: `url(${todo})`},
            imageModal: {backgroundImage: `url(${todoPw})`},
            title: 'Todolist',
            stack: 'CSS, HTML, TS, Redux',
            description: 'Work media with popUp, toTop, slider',
            linkGH: 'https://github.com/sergeisv113/it-incubator-todolist-ts',
            linkPr: ' https://sergeisv113.github.io/it-incubator-todolist-ts/'
        },
    ]

    return (
        <div className={s.worksBlock} id={'projects'}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <Bounce top>
                <h2 className={s.title}>My <span>projects</span></h2>
                <div className={s.works}>
                    {
                        projects.map(p => {
                            return <Project
                                key={p.id}
                                imageModal ={p.imageModal}
                                style={p.image}
                                title={p.title}
                                stack={p.stack}
                                description={p.description}
                                linkGH={p.linkGH}
                                linkPr={p.linkPr}
                            />
                        })
                    }
                </div>
                </Bounce>
            </div>
        </div>
    );
};
