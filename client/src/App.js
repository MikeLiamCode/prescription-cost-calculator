import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MedicineList from './containers/MedicineList'
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/medications" element={<MedicineList />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
