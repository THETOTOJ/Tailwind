import List from './Pages/List';
import Chat from './Pages/Chat';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashbord';
function App() {
  return (

    <BrowserRouter>
    < Routes >
      <Route path="/list" element={<List />}> </Route>
      <Route path="/dash" element={<Dashboard />}> </Route>
      <Route path="/chat" element={<Chat/>}>  </Route>
    </Routes >
    </BrowserRouter>

  );
}
export default App;