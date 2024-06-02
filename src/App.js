import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WebDesign from './Components/webdesign/webdesign';
import ForgotPassword from './Components/forgot-password/ForgotPassword';
import Templates from './Components/templates/templates';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<WebDesign />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
