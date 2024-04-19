import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  clickMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  clickBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-contanier">
        <div className="contanier">
          <h1 className="heading">
            Bob ate <span className="digit">{mangoes}</span> mangoes
            <span className="digit"> {bananas}</span> bananas
          </h1>
          <div className="image-contanier">
            <div className="image-card">
              <img
                className="image-size"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.clickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-card">
              <img
                className="image-size"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.clickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
