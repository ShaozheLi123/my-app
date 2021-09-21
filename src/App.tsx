import React, { useState } from 'react';
import './App.css';
import { Prompt } from './Intro/Prompt';
import { SwapButton } from './Intro/SwapButton';

function App(): JSX.Element{
  const [prompt, setPrompt] =useState<string>("Hello and Welcome");

  
  return (
    <div className="App">
      <Prompt text = {prompt}></Prompt>
      <SwapButton change={setPrompt}></SwapButton>
    </div>
    
  );
}

export default App;
