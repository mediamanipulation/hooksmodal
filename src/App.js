import React, { useRef } from 'react'
import logo from './logo.svg';

import Art from './components/modal/modalArt.jpg'
import ArtClick from './components/modal/modalClick.jpg'
import Modal from './components/modal/Modal'
import './App.css';

function App() {
const modal = useRef(null)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => modal.current.open()}><img src={ArtClick} /></button>
      </header>
     
      <Modal ref={modal}>
        <img src={Art} />
      </Modal>
    </div>
  );
}

export default App;
