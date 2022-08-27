import './App.css';
import {useRef} from 'react';

function App() {
  const object = useRef(null);
  const place = useRef(null);
  const adj = useRef(null);
  return (
    <div className="App">
      <h1>Message Generator</h1><br/>
      <form>
        <label for='object-form'>Type the first object that comes to mind: </label>
        <input type='text' id='object-form' ref={object}></input><br/><br/>
        <label for='place-form'>Type the first place that comes to mind: </label>
        <input type='text' id='place-form' ref={place}></input><br/><br/>
        <label for='adj-form'>Type the first adjective that comes to mind: </label>
        <input type='text' id='adj-form' ref={adj}></input><br/><br/>
      </form>
      <button onClick={GenerateMessage}>Generate Message</button><br/>
      <p id='fortune'></p>
    </div>
  );
  function GenerateMessage() {
    document.getElementById('fortune').innerHTML = 'You may find a ' + object.current.value + ' in ' + place.current.value + ' if you are ' + adj.current.value + ' enough.';
  }
}

export default App;
