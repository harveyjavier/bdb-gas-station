import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      gasData: {},
    };
  }

  componentWillMount() {
    fetch("https://ethgasstation.info/json/ethgasAPI.json")
    .then(res => res.json())
    .then(result => {
      console.log(result);
      this.setState({ isLoaded: true, gasData: result });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.isLoaded ?
              <div>
                <h3>ETH Gas ⛽:</h3>
                <p>{"average: " + this.state.gasData.average + "GWEI"}</p>
                <p>{"fast: " + this.state.gasData.fast + "GWEI"}</p>
                <p>{"fastest: " + this.state.gasData.fastest + "GWEI"}</p>
              </div>
            :
              <img src={logo} className="App-logo" alt="logo" />
          }
        </header>
      </div>
    );
  }
}

export default App;