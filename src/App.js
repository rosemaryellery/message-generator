import './App.css';
import { messages } from './Messages';

function App() {
  return (
    <div className="App">
      <h1>Message Generator</h1>
        <TakeInputs />
    </div>
  );
}

function GetMessage() {
  
}

function TakeInputs() {
  return (
    <div>
      <form>
        <label for='text-form'>Type the first object that comes to mind: </label>
        <input type='text' id='text-form'></input><br/><br/>
        <label for='text-form'>Type the first object that comes to mind: </label>
        <input type='text' id='text-form'></input><br/><br/>
        <label for='text-form'>Type the first object that comes to mind: </label>
        <input type='text' id='text-form'></input><br/><br/>
      </form>
    </div>
  )
}

export default App;
