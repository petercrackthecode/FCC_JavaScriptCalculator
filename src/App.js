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
    m_firstNum: 0,
    m_secondNum: 0,
    m_operand: '',
  };

  const handleResultChange= (result) => {
    state.m_result= result;
  };

  const inputNumber= () => {

  };

  const validateNumber= (inputNum, m_num) => {
    if (!isNaN(Number(inputNum))) {
      state[m_num]= parseFloat(inputNum);
    }
    else state.m_isFormulaValid= false;
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
