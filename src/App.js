import React from 'react';
import {Calculator} from './components/Calculator.js';
import {Display} from './components/Display.js';
import {KeyPad} from './components/KeyPad.js';
import './styles/App.css';

function App() {
  let state= {
    m_input: '',
    m_result: 0,
    m_output: 0,
    m_tempNum: undefined,
    m_operator: undefined,
  };

  const cleanUp= () => {
    state.m_tempNum= undefined;
    state.m_operator= undefined;
  }

  const calculateResult= () => {
    const result= state.m_result;
    const tempNum= state.m_tempNum;
    const operator= state.operator;
    // cleanUp before switch-case because they have return
    cleanUp();

    switch(state.m_operator) {
      case '+': return result + tempNum;
      case '-': return result - tempNum;
      case '*': return result * tempNum;
      case '/': {
        if (tempNum === 0) {
          state.m_output= "Error: Division by zero";
          return 0;
        }

        return result / tempNum;
      }
      default: return;
    }
  };


  const onFormulaChange= (key) => {
    switch (key) {
      case '=': {
        if (state.m_tempNum !== undefined) state.m_result= calculateResult();
      }
      case '+':
      case '-':
      case '*':
      case '/': if (state.m_operator === undefined) {
        
      }
      default: return;
    }
  };

  const validateInput= (inputNum, m_num) => {
    if (!isNaN(Number(inputNum))) {
      state[m_num]= parseFloat(inputNum);
    }
    else state.m_isFormulaValid= false;
  };

  return (
    <div id="app">
      <Calculator>
        <Display {...state}/>
        <KeyPad onFormulaChange={onFormulaChange}/>
      </Calculator>
    </div>
  );
}

export default App;
