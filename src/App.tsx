import React, { useState } from 'react';
import './App.css';
import { Prompt } from './Intro/Prompt';

function App(): JSX.Element{
  const [prompt, setPrompt] =useState<string>("Hello and Welcome");

  
  return (
    <div className="App">
      <Prompt text = {prompt}></Prompt>
    </div>
  );
}

export default App;
