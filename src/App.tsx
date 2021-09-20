import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Welcome} from './Intro/welcome-app';
import {Person} from "./interface/person";

function App(): JSX.Element{
  const shaozhe: Person = {name: "Shaozhe Li", hairColor: "blue"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome person = {shaozhe}></Welcome>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
