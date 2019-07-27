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
  };

  const onChange= (key) => {
    const formulaLength= state.m_formulaLength;
    switch (key) {
      case '=':
        switch (formulaLength) {
          case 3:
            state.m_result= calculateResult(parseFloat(state.m_formula[0]), state.m_formula[1], parseFloat(state.m_formula[2]));
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
      case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        if (formulaLength === 0 || formulaLength === 2)
          if (!(key === 0 && state.m_formula[formulaLength - 1].length === 0))
            state.m_formula.push(key);
        else
          state.m_formula[formulaLength - 1]+= key;
      break;
      case '+': case '-': case '*': case '/':
      break;
      default:
      break;
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
