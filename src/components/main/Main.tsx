import React from 'react';
import s from './Main.module.scss'
import sContainer from "../../common/styles/Container.module.scss";
import myFoto from '../../assets/MyFoto.jpg'
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from "react-typing-effect";
const Bounce = require("react-reveal/Bounce")

export const Main = () => {

    return (

        <div className={s.mainBlock}  id={'main'}>
            <div className={sContainer.container} >
                <Bounce top>
            <div className={s.photo}>
                <Tilt className="Tilt"
                      tiltMaxAngleX={40}
                      tiltMaxAngleY={40}
                      perspective={800}
                      transitionSpeed={1500}
                      scale={1.1}
                      gyroscope={true}
                >
                    <img src={myFoto} alt="myFoto"/>
                </Tilt>
            </div>

            <div className={s.boxInfo}>
                <span className={s.greeting}>HELLO</span>
                <h2 className={s.name}>I'M
                    <span>Sergey Strilets</span></h2>
                <h4>A <ReactTypingEffect
                    text={["front-end developer", "react developer"]}
                    speed={100}
                    eraseSpeed={100}
                    eraseDelay={1500}
                    typingDelay={1500}
                /></h4>

                <h5>About me</h5>
                <p>Hello, I’m a  front-end developer. I have experience in creating
                    SPA using React / Redux / TypeScript. Now I am improving my current skills
                    and expanding them with new technologies. I devote my free time to
                    Codewars as well as learning English. I'm planing to study Node.js, because
                    my next focus is to become a Full-Stack Developer. Open for your
                    suggestions.</p>
                </div>
                    </Bounce>
            </div>
        </div>
    );
};

