import List from './Pages/List';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
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
      </header>
    </div>
=======
    < Routes >

      <Route path="/list" element={<List />} > </Route>

    </Routes >
>>>>>>> 2aa4f73588e69ec05dc1c530fb0cff7fdbbc37d3
  );
}

export default App;
