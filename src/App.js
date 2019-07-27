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
    m_firstNum: undefined,
    m_secondNum: undefined,
    m_operator: undefined,
  };

  const cleanUp= () => {
    state.m_firstNum= undefined;
    state.m_secondNum= undefined;
  }

  const isCurrentOperator= (key) => {
    return key === state.m_operator;
  }

  const calculateResult= (firstNum, operator, secondNum) => {
    // cleanUp before switch-case because they have return
    let returnResult= 0;

    switch(operator) {
      case '+': returnResult= firstNum + secondNum;
      break;
      case '-': returnResult= firstNum - secondNum;
      break;
      case '*': returnResult= firstNum * secondNum;
      break;
      case '/':
        if (secondNum === 0) {
          state.m_output= "Error: Division by zero";
        }
        else returnResult= firstNum / secondNum;
      break;
      default:
      break;
    }

    cleanUp();
    return returnResult;
  };

  const onFormulaChange= (key) => {
    switch (key) {
      case '=':
      case '+':
      case '-':
      case '*':
      case '/':
          if (!isCurrentOperator(key)) {
            if (state.m_secondNum === undefined) {
              state.m_result= calculateResult(state.m_firstNum, state.m_operator, state.m_secondNum);
            }
          }
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
