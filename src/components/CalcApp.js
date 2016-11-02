import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      temp: 0,
      num: 0, /* 0: input first num
              // 1: just choose calc
              // 2: inputing second num */
      type: 0, /* 0: not yet
                  1: add
                  2: minus
                  3: mul
                  4: div */
    };
    this.numPressed = this.numPressed.bind(this);
    this.calPressed = this.calPressed.bind(this);
    this.calc = this.calc.bind(this);
  }

  resetState() {
    this.setState({
      result: 0,
      temp: 0,
      num: 0,
      type: 0,
    });
  }

  numPressed(num) {
    const real = Number(num);
    if (this.state.num === 1) {
      this.setState({
        result: real,
        num: 2,
      });
      return;
    }
    if (real === 0 && this.state.result === 0) {
      return;
    }
    this.setState({
      result: this.state.result * 10 + real,
    });
  }

  calPressed(type) {
    if (this.state.num === 0) {
      this.setState({
        num: 1,
        temp: this.state.result,
      });
    } else if (this.state.num === 2) {
      this.calc();
      this.setState({ num: 1 });
    }
    if (type === '+') {
      this.setState({ type: 1 });
    } else if (type === '-') {
      this.setState({ type: 2 });
    } else if (type === '×') {
      this.setState({ type: 3 });
    } else if (type === '÷') {
      this.setState({ type: 4 });
    } else if (type === '=') {
      this.setState({
        type: 0,
        num: 0,
      });
      this.calc();
    }
  }

  calc() {
    let a;
    switch (this.state.type) {
      case 1:
        this.setState({ result: a = this.state.result + this.state.temp });
        break;
      case 2:
        this.setState({ result: a = this.state.temp - this.state.result });
        break;
      case 3:
        this.setState({ result: a = this.state.result * this.state.temp });
        break;
      case 4:
        this.setState({ result: a = this.state.temp / this.state.result });
        break;
      default:
        console.log('Error');
    }
    this.setState({ temp: a });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.result}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.calPressed}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.numPressed}>
              7
            </CalcButton>
            <CalcButton className="calc-number" onClick={this.numPressed}>
              8
            </CalcButton>
            <CalcButton className="calc-number" onClick={this.numPressed}>
              9
            </CalcButton>
            <CalcButton className="calc-operator" onClick={this.calPressed}>×</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.numPressed}>
              4
            </CalcButton>
            <CalcButton className="calc-number" onClick={this.numPressed}>
              5
            </CalcButton>
            <CalcButton className="calc-number" onClick={this.numPressed}>
              6
            </CalcButton>
            <CalcButton className="calc-operator" onClick={this.calPressed}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.numPressed}>
              1
            </CalcButton>
            <CalcButton className="calc-number" onClick={this.numPressed}>
              2
            </CalcButton>
            <CalcButton className="calc-number" onClick={this.numPressed}>
              3
            </CalcButton>
            <CalcButton className="calc-operator" onClick={this.calPressed}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number bigger-btn"
              onClick={this.numPressed}
            >0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.calPressed}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
