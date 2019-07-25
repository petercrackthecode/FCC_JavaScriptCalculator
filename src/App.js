import React from 'react';
import {Calculator} from './components/Calculator.js';
import {Display} from './components/Display.js';
import {KeyPad} from './components/KeyPad.js';
import './styles/App.css';

function App() {
  let state= {
    m_formula: '',
    m_result: undefined,
    m_isFormulaValid: true,
    m_tempNum: undefined,
    m_currentOperand: undefined,
  };

  const cleanUp= (result= undefined) => {
    if (result) {

    }

  }

  const calculateResult= () => {
    /*
    state.m_result= (function returnResult() {

      switch(state.m_operand) {
        case '*': return
        case '+': return
        case '-': return
        default: return
      }
    });
    */

    // make state.= state.m_result, and clean m_secondNum to be ready for the next calculation
    cleanUp(state.m_result);
  };

  const onFormulaChange= (keyPressed) => {
    //if (state.m_currentOperand)
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
