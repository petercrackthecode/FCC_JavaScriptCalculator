import React from 'react';
import {Display} from './components/Display.js';
import {KeyPad} from './components/KeyPad.js';

function App() {
  let state= {
    m_formula: '',
    m_result: ''
  };

  return (
    <div className="App">
      <Display/>
      <KeyPad/>
    </div>
  );
}

export default App;
