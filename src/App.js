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
    const operator= state.m_operator;
    // cleanUp before switch-case because they have return
    let returnResult= undefined;

    switch(state.m_operator) {
      case '+': returnResult= result + tempNum;
      break;
      case '-': returnResult= result - tempNum;
      break;
      case '*': returnResult= result * tempNum;
      break;
      case '/':
        if (tempNum === 0) {
          state.m_output= "Error: Division by zero";
          returnResult= 0;
        }

        returnResult= result / tempNum;
      break;
      default: returnResult= 0;
      break;
    }

    cleanUp();
    return returnResult;
  };


  const onFormulaChange= (key) => {
    switch (key) {
      case '=': {
        if (state.m_tempNum !== undefined) state.m_result= calculateResult();
      }
      case '+':
      case '-':
      case '*':
      case '/': {
        if (state.m_tempNum === undefined) {
          state.m_operator= key;
        }
        else calculateResult();
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
