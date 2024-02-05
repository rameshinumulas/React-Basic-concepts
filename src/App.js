import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';
import JsxWithout from './components/JsxWithout';
import FirstMemo from './components/FirstMemo';
import ContextApi from './components/ContextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterComp from './components/RouterComp';
import FirstClass from './components/FirstClass';
function App() {
  return (
    <BrowserRouter>
    <ContextApi>
      <div className="App">
        <JsxWithout />
        <FirstClass />
        <FirstMemo />
        <Routes>
          <Route path='/main' Component={RouterComp} />
        </Routes>
      </div>
    </ContextApi>
    </BrowserRouter>
  );
}

export default App;
