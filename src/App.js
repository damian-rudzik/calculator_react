import React from 'react'

import Keyboard from './Keyboard.js'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      history: "",
      text: "",
      operator: ""
    }
    this.numberOne = ""
    this.numberTwo = ""
    this.result = ""
  }


  score = () => {

    if (this.state.operator && this.numberOne) {
      this.action(this.state.operator)
      this.setState({ operator: "" })

    }
    else {
      if (!this.state.operator) {
        alert("Podaj operatora działania")
      }
      else {
        alert("Podaj drugą liczbę")
      }
    }
  }

  clearAll = () => {
    this.numberOne = ""
    this.numberTwo = ""
    this.setState({ history: "" })
    this.setState({ text: "" })
  }

  check = (isFloat) => {
      if (isFloat % 1 !== 0) {
        this.result = this.result.toFixed(2)
      }
  }


  action = (operation) => {

    if (this.numberTwo) {
      this.setState({ operator: operation })
      if (this.numberOne) {

        this.numberOne = parseFloat(this.numberOne)
        this.numberTwo = parseFloat(this.numberTwo)
        if (operation === "+") {

          this.result = this.numberTwo + this.numberOne
          this.numberOne = ""
          this.setState({ text: "" })

        }
        if (operation === "-") {
          this.result = this.numberTwo - this.numberOne
          this.numberOne = ""
          this.setState({ text: "" })

        }
        if (operation === "/") {
          this.result = this.numberTwo / this.numberOne
          this.numberOne = ""
          this.setState({ text: "" })

        }
        if (operation === "X") {
          this.result = this.numberTwo * this.numberOne
          this.numberOne = ""
          this.setState({ text: "" })

        }
        this.check(this.result)  
        this.setState({ history: this.result })
        this.numberTwo = this.result
      }

    }

    else {

      if (this.numberOne) {
        this.setState({ text: "" })
        this.setState({ history: this.numberOne })
        this.numberTwo = this.numberOne
        this.numberOne = ""
        this.setState({ operator: operation })

      }
    }
  }

  handleClick = (event) => {
    const { value } = event.target

    if (value === "+") {
      this.action(value)
    }
    else if (value === "-") {
      this.action(value)
    }
    else if (value === "/") {
      this.action(value)
    }
    else if (value === "X") {
      this.action(value)
    }
    else if (value === "C") {
      this.clearAll()
    }
    else if (value === "=") {
      this.score()
    }
    else {
      this.numberOne += value
      this.setState(prevState => {
        return { text: prevState.text = prevState.text + value }
      })

    }
  }

  render() {

    return (
      <main>
      <article>
      <div className="calc">
        <div className="window">
          <div className="history">
            <div className="operator">{this.state.operator}</div>
            {this.state.history}</div>
          <div className="display">{this.state.text}</div>
        </div>
        <Keyboard handleClick={this.handleClick} />
      </div>
      </article>
      </main>
    )
  }
}

export default App