import React, { Component } from 'react';
import infloCharacter from './inflo-character.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Unwind your creativity
          </h1>
        </header>

        <footer className="App-footer">
            <img src={infloCharacter} alt={"Person holding a box with items"} />
        </footer>
      </div>
    );
  }
}

export default App;
