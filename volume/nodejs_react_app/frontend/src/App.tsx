import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineLikeMessage from './components/LineLikeMessage';
import TextareaForm from './components/TextareaForm';

function App() {
  return (
    /*
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
    </div>
    */
    <>
    <div className='container'>
      <div className='main'>
        <LineLikeMessage username='test' msg="こんうい"></LineLikeMessage>
        <LineLikeMessage username='test' msg="こんうい"></LineLikeMessage>
        <LineLikeMessage username='test' msg="こんうい"></LineLikeMessage>
      </div>
      <TextareaForm></TextareaForm>
    </div>
    
 
    </>

  );
}

export default App;
