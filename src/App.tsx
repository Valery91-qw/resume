import React from 'react';
import './App.css';
import {Skills} from "./skills/Skills";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Footer} from "./footer/Footer";
import {MyWorks} from "./my-works/MyWorks";
import {Contact} from "./contact/Contact";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills />
        <MyWorks/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
