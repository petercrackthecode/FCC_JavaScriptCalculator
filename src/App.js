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

  const calculateResult= (result, operator, tempNum) => {
    // cleanUp before switch-case because they have return
    let returnResult= 0;

    switch(operator) {
      case '+': returnResult= result + tempNum;
      break;
      case '-': returnResult= result - tempNum;
      break;
      case '*': returnResult= result * tempNum;
      break;
      case '/':
        if (tempNum === 0) {
          state.m_output= "Error: Division by zero";
        }
        else returnResult= result / tempNum;
      break;
      default:
      break;
    }

    cleanUp();
    return returnResult;
  };


  const onFormulaChange= (key) => {
    switch (key) {
      // buggy
      case '=':
        if (state.m_tempNum !== undefined) state.m_result= calculateResult(state.m_result, state.m_operator, state.m_tempNum);
      break;
      // buggy
      case '+':
      case '-':
      case '*':
      case '/':
        if (state.m_tempNum === undefined) {
          state.m_operator= key;
          state.m_result= parseFloat(state.m_input);
        }
        else state.m_result= calculateResult(state.m_result, state.m_operator, state.tempNum);
      break;
      case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        state.m_input+= key;
      break;
      case '0':
        if (!(state.m_input[0] === '0' || state.m_input.length === 0)) state.m_input+= key;
      break;
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
