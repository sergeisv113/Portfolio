import React from 'react';
import s from './Skills.module.scss'
import sContainer from "../../common/styles/Container.module.scss";
import {Skill} from "./skill/Skill";
import HTML from '../../assets/icons/html.svg'
import CSS from '../../assets/icons/css.svg'
import REACT from '../../assets/icons/react.svg'
import TDD from '../../assets/icons/tdd.svg'
import WORDPRESS from '../../assets/icons/wordpress.svg'
import API from '../../assets/icons/api.svg'
import SEO from '../../assets/icons/seo.svg'
import TYPESCRIPT from '../../assets/icons/typescript.svg'

const Bounce = require("react-reveal/Bounce")


export const Skills = () => {
    const skills = [
        {   id: '1',
            imageSkill: HTML,
            description: 'HTML (from the English  HyperText Markup Language  - “ hypertext markup language”) is a standardized hypertext markup language for viewing web pages in a browser . Web browsers receive an HTML document from the server via HTTP / HTTPS protocols or open it from a local disk, then interpret the code into an interface that will be displayed on the monitor screen.',
            title: 'HTML'
        },
        {   id: '2',
            imageSkill: CSS,
            description: 'CSS is used by web page creators to define colors , fonts , styles, positioning of individual blocks, and other presentation aspects of the appearance of those web pages. The main design goal of CSS is to fence off and separate the description of the logical structure of a web page (which is done using HTML or other markup languages ) from the description of that web page\'s appearance (which is now done using the formal CSS language ). This separation can increase the accessibility of a document, provide greater flexibility and control over its presentation, and reduce complexity and repetitiveness in structural content.',
            title: 'CSS'
        },
        {   id: '3',
            imageSkill: REACT,
            description: 'React can be used to develop single page and mobile applications. Its goal is to provide high development speed, simplicity and scalability . As a library for developing user interfaces, React is often used with other libraries such as MobX, Redux , and GraphQL .',
            title: 'REACT'
        },
        {   id: '4',
            imageSkill: TDD,
            description: 'Test - driven  development ( TDD ) is a software development technique that is based on repeating very short development cycles: first, a test is written that covers the desired change, then code is written that will allow the test to pass, and finally refactoring is carried out new code to the relevant standards. Kent Beck , considered the inventor of the technique, argued in 2003 that test-driven development encourages simple design and inspires confidence',
            title: 'TDD'
        },
        {   id: '5',
            imageSkill: WORDPRESS,
            description: 'WordPress  is a free and open source content management system ; written in PHP ; database server - MySQL ; released under the GNU GPL version 2 . The scope of application is from blogs to rather complex news resources. The built-in system of "themes" and " plugins ", together with a successful architecture , allows you to design projects of wide functional complexity.',
            title: 'WORDPRESS'
        },
        {   id: '6',
            imageSkill: API,
            description: ' Application Programming Interface is a description of how one computer program interacts with others . Usually included in the description of some Internet protocol (for example, SCIM [2] ), software framework ( framework [3] ) or operating system function call standard [4] . Often implemented by a separate software libraryor an operating system service . Used by programmers when writing all sorts of applications .',
            title: 'API'
        },
        {   id: '7',
            imageSkill: SEO,
            description: 'Search engine optimization (website promotion) ( English  search engine optimization, SEO ) is a set of measures for internal and external optimization to raise the position of the site in the results of search engines for certain user requests, in order to increase network traffic (for information resources), potential customers (for commercial and transactional resources) and subsequent monetization (revenue generation) of this traffic. SEO can be focused on various types of searches, including searches for information, products, services, images, videos, news, addresses, contacts, and industry-specific search engines.',
            title: 'SEO'
        },
        {   id: '8',
            imageSkill: TYPESCRIPT,
            description: 'TypeScript  is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript',
            title: 'TYPESCRIPT'
        },
    ]

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Bounce top>
                <h2 className={s.title}>My <span>skills</span></h2>
                <div className={s.skills}>
                    {
                        skills.map(s => {
                            return <Skill
                                        key={s.id}
                                        imageSkill={s.imageSkill}
                                        title={s.title}
                                        description={s.description}

                            />
                        })
                    }
                </div>
                </Bounce>
            </div>
        </div>
    );
};

