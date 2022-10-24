import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CheckIcon } from '@heroicons/react/20/solid'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <CheckIcon className='w-10 h-10 text-orange-400'/>
    </div>
  );
}

export default App;
