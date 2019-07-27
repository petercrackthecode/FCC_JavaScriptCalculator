import React from 'react';
import {Calculator} from './components/Calculator.js';
import {Display} from './components/Display.js';
import {KeyPad} from './components/KeyPad.js';
import './styles/App.css';

function App() {
  let state= {
    m_result: 0,
    // m_formula has a setup order as [firstNum, operator, secondNum]
    m_formula: [],
  };

  const emptyFormula= () => {
    state.m_formula= [];
  }

  const calculateResult= (firstNum, operator, secondNum) => {
    // emptyFormula before switch-case because they have return
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

    emptyFormula();
    return returnResult;
  };

  const onChange= (key) => {
    switch (key) {
      case '=':
        switch (state.m_formula.length) {
          case 3:
            calculateResult(parseFloat(state.m_formula[0]), state.m_formula[1], parseFloat(state.m_formula[2]));
          break;
          case 2: case 1:
            state.m_result= state.m_formula[0];
          break;
          case 0:
          default:
          break;
        }
        emptyFormula();
      break;
      default: ;
    }
  };

  return (
    <div id="app">
      <Calculator>
        <Display {...state}/>
        <KeyPad onChange={onChange}/>
      </Calculator>
    </div>
  );
}

export default App;
