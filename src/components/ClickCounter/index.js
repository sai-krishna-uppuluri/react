import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="main-heading">
            The Button has been Clicked <span className="counter">0</span> times
          </h1>
          <p className="description">Click the Button to increase the count </p>
          <button className="button" type="button">
            Click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
