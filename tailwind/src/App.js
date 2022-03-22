import List from './Pages/List';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    < Routes >

      <Route path="/list" element={<List />} > </Route>

    </Routes >
  );
}

export default App;
