import React from 'react';
// import {Calculator} from './components/Calculator.js';
import {Display} from './components/Display.js';
import {KeyPad} from './components/KeyPad.js';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      m_result: 12,
      // m_formula has a setup order as [firstNum, operator, secondNum]
      m_formula: [],
      m_isDivisionByZero: false,
    };
  }


  emptyFormula= () => {
    this.setState({m_formula: []});
  }

  clearAll= () => {
    this.emptyFormula();
    this.setState({m_result: 0});
  }

  // you must check for division by zero here
  calculateResult= (firstNum, operator, secondNum) => {
    let result= this.state.m_result;

    switch (operator) {
      case '+': result= firstNum + secondNum;
      break;
      case '-': result= firstNum - secondNum;
      break;
      case '*': result= firstNum * secondNum;
      break;
      case '/':
        if (!secondNum) this.setState({m_isDivisionByZero: true});
        else result= firstNum / secondNum;
      break;
      default:
      break;
    }

    return result;
  };

  onChange= (key) => {
    console.log("onChange activates on " + key);
    this.setState({m_result: key});
    console.log("state.m_result= " + this.state.m_result);
  }

  onChange= (key) => {
    const formulaLength= this.state.m_formulaLength;
    const firstNum= this.state.m_formula[0];
    const operator= this.state.m_formula[1];
    const secondNum= this.state.m_formula[2];

    switch (key) {
      // every time an user presses '=' immediately show the result
      case '=':
        switch (formulaLength) {
          case 3:
            this.setState({
              m_result: this.calculateResult(Number(firstNum), operator, Number(secondNum))
            });
          break;
          case 2: case 1:
            this.setState({m_result: firstNum});
          break;
          case 0:
          default:
          break;
        }
        this.emptyFormula();
      break;
      case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        if (formulaLength === 0 || formulaLength === 2)
          if (!(key === 0 && this.state.m_formula[formulaLength - 1].length === 0)) {
            this.setState({m_formula: this.state.m_formula.concat(key)});
          }
        else {
          let newFormula= this.state.m_formula;
          newFormula[formulaLength - 1]+= key;
          this.setState({m_formula: newFormula});
        }
      break;
      case '+': case '-': case '*': case '/':
        switch (formulaLength) {
          case 0:
            this.setState({m_formula: this.state.formula.concat(this.state.m_result)});
          break;
          case 1: case 2:
          break;
          case 3:
            this.setState({
              m_result: this.calculateResult(Number(firstNum), operator, Number(secondNum))
            });
            this.emptyFormula();
            this.setState({m_formula: this.state.m_formula.concat(this.state.m_result)});
          break;
          default:
          break;
        }
        this.setState({m_formula: this.state.m_formula.concat(key)});
      break;
      case 'AC':
        this.clearAll();
      break;
      default:
      break;
    }
  }

  render() {
    return (
      <div id="app">
        <div id='calculator'>
          <Display m_result={this.state.m_result}/>
          <KeyPad onChange={this.onChange}/>
        </div>
      </div>
    );
  }
}

export default App;
