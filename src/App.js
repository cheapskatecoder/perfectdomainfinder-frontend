import React from 'react';
import logo from './logo.svg';
import './App.css';
import {setURL} from './redux/utils/setUrl';
import Home from './components/Home';

function App() {
    console.log(setURL());
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
