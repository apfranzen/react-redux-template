import React, { Component } from 'react'

class App extends Component {

  render() {

    return (
      <div className="container">
        <p>Value: <span>{ this.props.value }</span></p>
        <button
          className="btn btn-success"
          onClick={ this.props.onIncrement }
        >+</button>
        <button
          className="btn btn-success"
          onClick={ this.props.onDecrement }
        >-</button>
      </div>
    )
  }

}

export default App