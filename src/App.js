import './App.css';
import Create from './features/Create';
import Edit from './features/Edit';
import Table from './components/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Table/>}/>
        <Route path='/new' element={<Create/>}/>
        <Route path='/:id' element={<Edit/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
