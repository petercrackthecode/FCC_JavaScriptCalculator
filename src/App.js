import React from "react";
import { Calculator } from "./components/Calculator.js";
import { Display } from "./components/Display.js";
import { KeyPad } from "./components/KeyPad.js";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m_result: 0,
      // m_formula has a setup order as [firstNum, operator, secondNum]
      m_formula: [],
      m_isDivisionByZero: false
    };
    this.onChange = this.onChange.bind(this);
    this.emptyFormula = this.emptyFormula.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  async emptyFormula() {
    await this.setState({ m_formula: [] });
  }

  async clearAll() {
    await this.emptyFormula();
    await this.setState({ m_result: 0 });
  }

  // you must check for division by zero here
  async calculateResult(firstNum, operator, secondNum) {
    if (!firstNum) firstNum = 0;
    if (!secondNum) secondNum = 0;

    let result = this.state.m_result;

    switch (operator) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "/":
        if (!secondNum) await this.setState({ m_isDivisionByZero: true });
        else result = firstNum / secondNum;
        break;
      default:
        break;
    }

    return result;
  }

  // onChange= (key) => {
  //   console.log("onChange activates on " + key);
  //   this.setState({m_result: key});
  //   console.log("state.m_result= " + this.state.m_result);
  // }

  async onChange(key) {
    const formulaLength = this.state.m_formula.length;
    const firstNum = this.state.m_formula[0];
    const operator = this.state.m_formula[1];
    const secondNum = this.state.m_formula[2];

    switch (key) {
      // every time an user presses '=' immediately show the result
      case "=":
        switch (formulaLength) {
          case 3:
            await this.setState({
              m_result: await this.calculateResult(
                Number(firstNum),
                operator,
                Number(secondNum)
              )
            });
            break;
          case 2:
          case 1:
            await this.setState({ m_result: Number(firstNum) });
            break;
          case 0:
          default:
            break;
        }
        this.emptyFormula();
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (formulaLength === 0 || formulaLength === 2) {
          if (!(key === "0" && !this.state.m_formula[formulaLength - 1]))
            await this.setState(prevState => ({
              m_formula: prevState.m_formula.concat(key)
            }));
        } // formulaLength= 1 || 3
        else {
          let newFormula = this.state.m_formula;
          newFormula[formulaLength - 1] += key;
          await this.setState({ m_formula: newFormula });
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        switch (formulaLength) {
          case 0:
            await this.setState(prevState => ({
              m_formula: prevState.m_formula.concat(
                prevState.m_result.toString(),
                key
              )
            }));
            break;
          case 1:
            let newFormula = this.state.m_formula;
            newFormula[1] = key;
            await this.setState({ m_formula: newFormula });
            break;
          case 2:
            if (key === "+" || key === "-") {
              let newFormula= this.state.m_formula;
              newFormula.push(key);
              await this.setState({
                m_formula: newFormula
              });
            }
            break;
          case 3:
            await this.setState({
              m_result: await this.calculateResult(
                Number(firstNum),
                operator,
                Number(secondNum)
              )
            });
            this.emptyFormula();
            await this.setState(prevState => ({
              m_formula: prevState.m_formula.concat(
                prevState.m_result.toString(),
                key
              )
            }));
            break;
          default:
            break;
        }
        break;
      case ".":
        if (formulaLength === 0 || formulaLength === 2) {
          let newFormula = this.state.m_formula.concat(key);
          this.setState({ m_formula: newFormula });
        } else {
          let newReg = new RegExp("\\" + key, "g");
          if (!newReg.test(this.state.m_formula[formulaLength - 1])) {
            console.log("-1 here");
            let newFormula = this.state.m_formula;
            newFormula[formulaLength - 1] += key;
            this.setState({ m_formula: newFormula });
          }
        }
        break;
      case "AC":
        this.clearAll();
        break;
      default:
        break;
    }

    console.log("formula Length in App.js= " + this.state.m_formula.length);
  }

  render() {
    return (
      <div id="app">
        <Calculator>
          <Display {...this.state} />
          <KeyPad onChange={this.onChange} />
        </Calculator>
      </div>
    );
  }
}

export default App;
