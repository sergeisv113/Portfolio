import React from 'react';
import './App.module.scss';
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Remote} from "./components/remote/Remote";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Header} from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Remote/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
//yarn run deploy