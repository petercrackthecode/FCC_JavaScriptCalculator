import React from 'react';
import {Calculator} from './components/Calculator.js';
import {Display} from './components/Display.js';
import {KeyPad} from './components/KeyPad.js';
import './styles/App.css';

function App() {
  let state= {
    m_formula: '',
    m_result: '',
    m_isFormulaValid: true,
    
  };

  const handleResultChange= (result) => {
    state.m_result= result;
  };

  return (
    <div id="app">
      <Calculator>
        <Display {...state}/>
        <KeyPad/>
      </Calculator>
    </div>
  );
}

export default App;
